import React, { useState, useEffect, useRef } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Animated, Dimensions } from 'react-native';
import { useLocalSearchParams, useRouter } from 'expo-router';
import AsyncStorage from '@react-native-async-storage/async-storage';
import questions from './questions';

const { width, height } = Dimensions.get("window");

function getRandomQuestions(arr, count) {
  const shuffled = [...arr].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
}

export default function QuizScreen() {
  const { tech } = useLocalSearchParams();
  const router = useRouter();

  const allQuestions = questions[tech];
  const easyQuestions = allQuestions.filter(q => q.level === "easy");
  const mediumQuestions = allQuestions.filter(q => q.level === "medium");
  const hardQuestions = allQuestions.filter(q => q.level === "hard");

  const quizQuestions = [
    ...getRandomQuestions(easyQuestions, 5),
    ...getRandomQuestions(mediumQuestions, 5),
    ...getRandomQuestions(hardQuestions, 5),
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(quizQuestions[0]);
  const [score, setScore] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [showAnswer, setShowAnswer] = useState(false);
  const [timeLeft, setTimeLeft] = useState(30);
  const [correctCount, setCorrectCount] = useState(0);
  const [wrongCount, setWrongCount] = useState(0);
  const [darkMode, setDarkMode] = useState(true);

  const toggleTheme = () => setDarkMode(!darkMode);
  const theme = darkMode ? darkStyles : lightStyles;

  // Estrelas animadas
  const stars = Array.from({ length: 50 }).map(() => {
    const opacity = useRef(new Animated.Value(0)).current;
    const top = Math.random() * height;
    const left = Math.random() * width;
    const size = Math.random() * 2 + 1;

    const speedCategory = Math.floor(Math.random() * 3);
    let duration;
    if (speedCategory === 0) duration = 600 + Math.random() * 800;
    else if (speedCategory === 1) duration = 1200 + Math.random() * 1500;
    else duration = 2000 + Math.random() * 2000;

    useEffect(() => {
      Animated.loop(
        Animated.sequence([
          Animated.timing(opacity, { toValue: 0.6, duration, useNativeDriver: true }),
          Animated.timing(opacity, { toValue: 0.1, duration, useNativeDriver: true }),
        ])
      ).start();
    }, []);

    return { opacity, top, left, size };
  });

  // cronômetro
  useEffect(() => {
    if (!showAnswer) {
      const timer = setInterval(() => {
        setTimeLeft(prev => {
          if (prev <= 1) {
            clearInterval(timer);
            handleAnswer(null);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
      return () => clearInterval(timer);
    }
  }, [showAnswer]);

  const handleAnswer = async (optionIndex) => {
    setSelectedOption(optionIndex);
    setShowAnswer(true);

    if (optionIndex !== null) {
      const option = currentQuestion.options[optionIndex];
      if (option && option.correct) {
        let points = currentQuestion.level === 'easy' ? 10 : currentQuestion.level === 'medium' ? 15 : 20;
        setScore(prev => prev + points);
        setCorrectCount(prev => prev + 1);
      } else {
        setWrongCount(prev => prev + 1);
      }
    } else {
      setWrongCount(prev => prev + 1);
    }

    setTimeout(async () => {
      if (currentIndex + 1 < quizQuestions.length) {
        const nextIndex = currentIndex + 1;
        setCurrentIndex(nextIndex);
        setCurrentQuestion(quizQuestions[nextIndex]);
        setSelectedOption(null);
        setShowAnswer(false);
        setTimeLeft(30);
      } else {
        const userData = await AsyncStorage.getItem('username');
        const user = userData ? JSON.parse(userData) : null;

        if (!user || !user.name) {
          router.replace('/');
          return;
        }

        const rankingData = await AsyncStorage.getItem('ranking');
        let ranking = rankingData ? JSON.parse(rankingData) : [];
        const playerIndex = ranking.findIndex(p => p.name === user.name);

        let totalScore;
        if (playerIndex !== -1) {
          ranking[playerIndex].score = (ranking[playerIndex].score || 0) + score;
          totalScore = ranking[playerIndex].score;
        } else {
          ranking.push({ name: user.name, password: user.password, score });
          totalScore = score; // inicializa corretamente
        }

        // 🔓 desbloqueia recompensa apenas se atingir a meta
        if (totalScore >= 250) {
          await AsyncStorage.setItem('rewardUnlocked', 'true');
        } else {
          // só força bloqueio se ainda não estiver desbloqueado
          const unlocked = await AsyncStorage.getItem('rewardUnlocked');
          if (unlocked !== 'true') {
            await AsyncStorage.setItem('rewardUnlocked', 'false');
          }
        }

        ranking.sort((a, b) => b.score - a.score);
        await AsyncStorage.setItem('ranking', JSON.stringify(ranking));

        router.replace({
          pathname: '/result',
          params: { correct: correctCount, wrong: wrongCount, score: totalScore },
        });
      }
    }, 1500);
  };

  return (
    <View style={theme.container}>
      {/* Estrelas no fundo */}
      {darkMode &&
        stars.map((star, index) => (
          <Animated.View
            key={index}
            style={{
              position: "absolute",
              top: star.top,
              left: star.left,
              width: star.size,
              height: star.size,
              borderRadius: star.size / 2,
              backgroundColor: "#fff",
              opacity: star.opacity,
            }}
          />
        ))}

      {/* Botão voltar */}
      <TouchableOpacity
        style={theme.backButton}
        onPress={async () => {
          setScore(0);
          setCorrectCount(0);
          setWrongCount(0);
          setCurrentIndex(0);
          setCurrentQuestion(quizQuestions[0]);
          setSelectedOption(null);
          setShowAnswer(false);
          setTimeLeft(30);

          // 🔒 só força bloqueio se ainda não estiver desbloqueado
          const unlocked = await AsyncStorage.getItem('rewardUnlocked');
          if (unlocked !== 'true') {
            await AsyncStorage.setItem('rewardUnlocked', 'false');
          }

          router.replace('/choices');
        }}
      >
        <Text style={theme.backButtonText}>←</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={toggleTheme}>
        <Text style={theme.icon}>{darkMode ? '🌙' : '☀️'}</Text>
      </TouchableOpacity>

      <Text style={theme.title}>Quiz de {tech.toUpperCase()}</Text>
      <Text style={theme.phase}>Fase {currentIndex + 1} de {quizQuestions.length}</Text>
      <Text style={theme.level}>
        Nível: {currentQuestion.level === 'easy' ? 'Fácil' : currentQuestion.level === 'medium' ? 'Médio' : 'Difícil'}
      </Text>

      <Text style={theme.question}>{currentQuestion.question}</Text>

      {currentQuestion.options.map((opt, idx) => {
        let optionStyle = theme.option;
        if (showAnswer) {
          if (opt.correct) {
            optionStyle = { ...theme.option, backgroundColor: 'green' };
          } else if (selectedOption === idx) {
            optionStyle = { ...theme.option, backgroundColor: 'red' };
          }
        }
        return (
          <TouchableOpacity
            key={idx}
            style={optionStyle}
            onPress={() => !showAnswer && handleAnswer(idx)}
          >
            <Text style={theme.optionText}>{opt.text}</Text>
          </TouchableOpacity>
        );
      })}

      <Text style={theme.score}>Pontuação: {score}</Text>
      <Text style={theme.timer}>Tempo restante: {timeLeft}s</Text>
    </View>
  );
}

// Tema escuro
const darkStyles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 40, backgroundColor: '#1a001f' },
  icon: { fontSize: 32, marginBottom: 10 },
  title: { fontSize: 26, fontWeight: 'bold', marginBottom: 20, color: '#9d4edd' },
  phase: { fontSize: 16, marginBottom: 5, fontWeight: 'bold', color: '#fff' },
  level: { fontSize: 16, marginBottom: 15, color: '#aaa' },
  question: { fontSize: 18, marginBottom: 20, color: '#f1f1f1' },
  option: { borderWidth: 1, borderColor: '#c77dff', padding: 12, width: '80%', marginBottom: 12, borderRadius: 6, backgroundColor: '#2d0033' },
  optionText: { fontSize: 16, color: '#fff' },
  score: { marginTop: 30, fontSize: 16, color: '#fff' },
  timer: { marginTop: 10, fontSize: 16, color: 'red', fontWeight: 'bold' },
  backButton: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#9d4edd',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: 40,
    left: 20,
  },
  backButtonText: { color: '#fff', fontSize: 24, fontWeight: 'bold' },
});

// Tema claro
const lightStyles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 40, backgroundColor: '#f8f9fa' },
  icon: { fontSize: 32, marginBottom: 10 },
  title: { fontSize: 26, fontWeight: 'bold', marginBottom: 20, color: '#ff6f00' },
  phase: { fontSize: 16, marginBottom: 5, fontWeight: 'bold', color: '#000' },
  level: { fontSize: 16, marginBottom: 15, color: '#555' },
  question: { fontSize: 18, marginBottom: 20, color: '#000' },
  option: { borderWidth: 1, borderColor: '#e63946', padding: 12, width: '80%', marginBottom: 12, borderRadius: 6, backgroundColor: '#fff' },
  optionText: { fontSize: 16, color: '#000' },
  score: { marginTop: 30, fontSize: 16, color: '#000' },
  timer: { marginTop: 10, fontSize: 16, color: 'red', fontWeight: 'bold' },
  backButton: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#ff6f00',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: 40,
    left: 20,
  },
  backButtonText: { color: '#fff', fontSize: 24, fontWeight: 'bold' },
});
