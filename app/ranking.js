import React, { useEffect, useState, useRef } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity, Animated, Dimensions } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useRouter } from 'expo-router';

const { width, height } = Dimensions.get("window");

export default function RankingScreen() {
  const [ranking, setRanking] = useState([]);
  const [darkMode, setDarkMode] = useState(true);
  const router = useRouter();

  // Criar estrelas
  const stars = Array.from({ length: 50 }).map(() => {
    const opacity = useRef(new Animated.Value(0)).current;
    const top = Math.random() * height;
    const left = Math.random() * width;
    const size = Math.random() * 2 + 1; // pequenas (1 a 3 px)

    // velocidade aleatória
    const speedCategory = Math.floor(Math.random() * 3);
    let duration;
    if (speedCategory === 0) duration = 600 + Math.random() * 800; // rápido
    else if (speedCategory === 1) duration = 1200 + Math.random() * 1500; // médio
    else duration = 2000 + Math.random() * 2000; // lento

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

  useEffect(() => {
    const loadRanking = async () => {
      const data = await AsyncStorage.getItem('ranking');
      if (data) {
        let parsed = JSON.parse(data);

        parsed = parsed.map((player, index) => ({
          id: player.id ?? index,
          name: player.name,
          score: player.score ?? 0,
        }));

        parsed.sort((a, b) => b.score - a.score);
        setRanking(parsed);
      }
    };
    loadRanking();
  }, []);

  const toggleTheme = () => setDarkMode(!darkMode);
  const theme = darkMode ? darkStyles : lightStyles;

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

      <Text style={theme.title}>Ranking</Text>
      <FlatList
        data={ranking}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item, index }) => (
          <View style={theme.item}>
            <Text style={theme.name}>{index + 1}. {item.name}</Text>
            <Text style={theme.score}>{item.score} pontos</Text>
          </View>
        )}
      />

      <View style={{ marginTop: 20 }}>
        <TouchableOpacity style={theme.button} onPress={() => router.replace('/choices')}>
          <Text style={theme.buttonText}>Voltar ao Menu</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

// Tema escuro
const darkStyles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#1a001f' },
  icon: { fontSize: 32, marginBottom: 10, textAlign: 'center' },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 20, textAlign: 'center', color: '#9d4edd' },
  item: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 10 },
  name: { fontSize: 18, color: '#fff' },
  score: { fontSize: 18, fontWeight: 'bold', color: '#ff6f00' },
  button: { backgroundColor: '#9d4edd', padding: 12, borderRadius: 8, alignItems: 'center' },
  buttonText: { color: '#fff', fontWeight: 'bold' },
});

// Tema claro
const lightStyles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#f8f9fa' },
  icon: { fontSize: 32, marginBottom: 10, textAlign: 'center' },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 20, textAlign: 'center', color: '#ff6f00' },
  item: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 10 },
  name: { fontSize: 18, color: '#000' },
  score: { fontSize: 18, fontWeight: 'bold', color: '#9d4edd' },
  button: { backgroundColor: '#ff6f00', padding: 12, borderRadius: 8, alignItems: 'center' },
  buttonText: { color: '#fff', fontWeight: 'bold' },
});
