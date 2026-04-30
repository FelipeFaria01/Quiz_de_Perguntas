import React, { useEffect, useState, useRef } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Animated, Dimensions } from 'react-native';
import { useRouter } from 'expo-router';
import AsyncStorage from '@react-native-async-storage/async-storage';

const { width, height } = Dimensions.get("window");

export default function ChoiceScreen() {
  const router = useRouter();
  const [rewardUnlocked, setRewardUnlocked] = useState(false);
  const [darkMode, setDarkMode] = useState(true);

  const toggleTheme = () => setDarkMode(!darkMode);
  const theme = darkMode ? darkStyles : lightStyles;

  // Criar estrelas
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

  // Verifica recompensa com base no ranking e usuário
  useEffect(() => {
    const checkReward = async () => {
      const userData = await AsyncStorage.getItem('username');
      const user = userData ? JSON.parse(userData) : null;

      if (!user || !user.name) {
        setRewardUnlocked(false);
        return;
      }

      const rankingData = await AsyncStorage.getItem('ranking');
      const ranking = rankingData ? JSON.parse(rankingData) : [];
      const player = ranking.find(p => p.name === user.name);

      if (player && player.score >= 250) {
        setRewardUnlocked(true);
        await AsyncStorage.setItem('rewardUnlocked', 'true');
      } else {
        setRewardUnlocked(false);
        await AsyncStorage.setItem('rewardUnlocked', 'false');
      }
    };
    checkReward();
  }, []);

  return (
    <View style={theme.container}>
      {/* Estrelas no fundo (apenas no tema escuro) */}
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

      <TouchableOpacity onPress={toggleTheme}>
        <Text style={theme.icon}>{darkMode ? '🌙' : '☀️'}</Text>
      </TouchableOpacity>

      <Text style={theme.title}>Escolha uma tecnologia:</Text>

      {/* Botões das tecnologias */}
      <View style={theme.techRow}>
        <TouchableOpacity style={theme.techButton} onPress={() => router.push('/quiz?tech=html')}>
          <Text style={theme.techIcon}>🌐</Text>
          <Text style={theme.techText}>HTML</Text>
        </TouchableOpacity>
        <TouchableOpacity style={theme.techButton} onPress={() => router.push('/quiz?tech=css')}>
          <Text style={theme.techIcon}>🎨</Text>
          <Text style={theme.techText}>CSS</Text>
        </TouchableOpacity>
        <TouchableOpacity style={theme.techButton} onPress={() => router.push('/quiz?tech=js')}>
          <Text style={theme.techIcon}>⚡</Text>
          <Text style={theme.techText}>JS</Text>
        </TouchableOpacity>
      </View>

      {/* Botão de recompensa */}
      <View style={{ marginTop: 30 }}>
        <TouchableOpacity
          style={[theme.rewardButton, !rewardUnlocked && theme.disabled]}
          disabled={!rewardUnlocked}
          onPress={() => router.push('/reward')}
        >
          <Text style={theme.rewardText}>
            {rewardUnlocked ? 'Recompensa Especial 🎉' : 'Recompensa Bloqueada'}
          </Text>
        </TouchableOpacity>
      </View>

      {/* Botões de sair e ranking */}
      <View style={theme.bottomRow}>
        <TouchableOpacity style={theme.circleButton} onPress={() => router.replace('/')}>
          <Text style={theme.circleIcon}>←</Text>
        </TouchableOpacity>
        <TouchableOpacity style={theme.circleButton} onPress={() => router.push('/ranking')}>
          <Text style={theme.circleIcon}>🏆</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

// Tema escuro
const darkStyles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 40, backgroundColor: '#1a001f' },
  icon: { fontSize: 32, marginBottom: 10 },
  title: { fontSize: 26, fontWeight: 'bold', marginBottom: 20, color: '#9d4edd' },
  techRow: { flexDirection: 'row', justifyContent: 'space-around', width: '100%' },
  techButton: { backgroundColor: '#2d0033', borderRadius: 12, padding: 20, alignItems: 'center', marginHorizontal: 8, flex: 1 },
  techIcon: { fontSize: 28, marginBottom: 8, color: '#9d4edd' },
  techText: { fontSize: 16, color: '#fff', fontWeight: 'bold' },
  rewardButton: { paddingVertical: 12, paddingHorizontal: 20, borderRadius: 8, backgroundColor: 'green' },
  disabled: { backgroundColor: 'gray' },
  rewardText: { color: '#fff', fontSize: 16, fontWeight: 'bold' },
  bottomRow: { flexDirection: 'row', justifyContent: 'space-around', width: '60%', marginTop: 30 },
  circleButton: { width: 60, height: 60, borderRadius: 30, backgroundColor: '#9d4edd', justifyContent: 'center', alignItems: 'center', marginHorizontal: 10 },
  circleIcon: { fontSize: 26, color: '#fff' },
});

// Tema claro
const lightStyles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 40, backgroundColor: '#f8f9fa' },
  icon: { fontSize: 32, marginBottom: 10 },
  title: { fontSize: 26, fontWeight: 'bold', marginBottom: 20, color: '#ff6f00' },
  techRow: { flexDirection: 'row', justifyContent: 'space-around', width: '100%' },
  techButton: { backgroundColor: '#fff', borderRadius: 12, padding: 20, alignItems: 'center', marginHorizontal: 8, flex: 1, borderWidth: 1, borderColor: '#e63946' },
  techIcon: { fontSize: 28, marginBottom: 8, color: '#ff6f00' },
  techText: { fontSize: 16, color: '#000', fontWeight: 'bold' },
  rewardButton: { paddingVertical: 12, paddingHorizontal: 20, borderRadius: 8, backgroundColor: 'green' },
  disabled: { backgroundColor: 'gray' },
  rewardText: { color: '#fff', fontSize: 16, fontWeight: 'bold' },
  bottomRow: { flexDirection: 'row', justifyContent: 'space-around', width: '60%', marginTop: 30 },
  circleButton: { width: 60, height: 60, borderRadius: 30, backgroundColor: '#ff6f00', justifyContent: 'center', alignItems: 'center', marginHorizontal: 10 },
  circleIcon: { fontSize: 26, color: '#fff' },
});
