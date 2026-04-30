import React, { useState, useRef, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Animated, Dimensions } from 'react-native';
import { useLocalSearchParams, useRouter } from 'expo-router';

const { width, height } = Dimensions.get("window");

export default function ResultScreen() {
  const { correct, wrong, score } = useLocalSearchParams();
  const router = useRouter();
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

      <TouchableOpacity onPress={toggleTheme}>
        <Text style={theme.icon}>{darkMode ? '🌙' : '☀️'}</Text>
      </TouchableOpacity>

      <Text style={theme.title}>Resultado do Quiz</Text>

      <Text style={theme.result}>Acertos: {correct}</Text>
      <Text style={theme.result}>Erros: {wrong}</Text>
      {score && <Text style={theme.result}>Pontuação total: {score}</Text>}

      <TouchableOpacity style={theme.button} onPress={() => router.replace('/choices')}>
        <Text style={theme.buttonText}>Voltar ao Menu Principal</Text>
      </TouchableOpacity>
    </View>
  );
}

// Tema escuro (roxo)
const darkStyles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20, backgroundColor: '#1a001f' },
  icon: { fontSize: 32, marginBottom: 10 },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 20, color: '#9d4edd' },
  result: { fontSize: 20, marginVertical: 10, color: '#fff' },
  button: { marginTop: 30, backgroundColor: '#9d4edd', paddingVertical: 12, paddingHorizontal: 20, borderRadius: 8 },
  buttonText: { color: '#fff', fontSize: 16, fontWeight: 'bold' },
});

// Tema claro (laranja complementar)
const lightStyles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20, backgroundColor: '#f8f9fa' },
  icon: { fontSize: 32, marginBottom: 10 },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 20, color: '#ff6f00' },
  result: { fontSize: 20, marginVertical: 10, color: '#000' },
  button: { marginTop: 30, backgroundColor: '#ff6f00', paddingVertical: 12, paddingHorizontal: 20, borderRadius: 8 },
  buttonText: { color: '#fff', fontSize: 16, fontWeight: 'bold' },
});
