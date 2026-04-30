import React, { useState, useEffect, useRef } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Animated, Dimensions } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useRouter } from 'expo-router';

const { width, height } = Dimensions.get("window");
const DEV_MODE = false; // se true, limpa todos os dadoscopo

export default function LoginScreen() {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
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
    const resetData = async () => {
      if (DEV_MODE) {
        await AsyncStorage.clear();
        console.log("Todos os dados foram apagados pelo desenvolvedor!");
      }
    };
    resetData();
  }, []);

  const handleLogin = async () => {
    if (name.trim().length === 0 || password.trim().length === 0) {
      setError('Digite nome e senha');
      return;
    }

    const rankingData = await AsyncStorage.getItem('ranking');
    let ranking = rankingData ? JSON.parse(rankingData) : [];

    const player = ranking.find(p => {
      if (!p || !p.name || !p.password) return false;
      return p.name.toLowerCase() === name.toLowerCase() && p.password === password;
    });

    if (player) {
      await AsyncStorage.setItem('username', JSON.stringify(player));
      setError('');
      router.replace('/choices');
    } else {
      setError('Usuário não encontrado. Cadastre-se primeiro.');
    }
  };

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

      <Text style={theme.title}>Login</Text>

      <TextInput
        style={theme.input}
        placeholder="Digite seu nome"
        placeholderTextColor={darkMode ? "#aaa" : "#555"}
        value={name}
        onChangeText={setName}
      />
      <TextInput
        style={theme.input}
        placeholder="Digite sua senha"
        placeholderTextColor={darkMode ? "#aaa" : "#555"}
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />

      {error ? (
        <View style={theme.errorBox}>
          <Text style={theme.errorText}>{error}</Text>
        </View>
      ) : null}

      <View style={theme.buttonGroup}>
        <TouchableOpacity style={theme.customButton} onPress={handleLogin}>
          <Text style={theme.customButtonText}>Entrar</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => router.replace('/register')}>
          <Text style={theme.linkText}>Cadastrar</Text>
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
  input: { borderWidth: 1, borderColor: '#c77dff', padding: 12, width: '80%', marginBottom: 12, borderRadius: 6, backgroundColor: '#2d0033', color: '#f1f1f1' },
  errorBox: { backgroundColor: '#e63946', borderRadius: 8, padding: 10, marginBottom: 10, width: '80%', alignItems: 'center' },
  errorText: { color: '#fff', fontWeight: 'bold', textAlign: 'center' },
  buttonGroup: { width: '80%', marginTop: 20, alignItems: 'center' },
  customButton: { backgroundColor: '#9d4edd', paddingVertical: 12, borderRadius: 8, width: '100%', alignItems: 'center', marginBottom: 12 },
  customButtonText: { color: '#fff', fontSize: 16, fontWeight: 'bold' },
  linkText: { color: '#ff6f00', fontSize: 16, marginTop: 8, textDecorationLine: 'underline' },
});

// Tema claro
const lightStyles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 40, backgroundColor: '#f8f9fa' },
  icon: { fontSize: 32, marginBottom: 10 },
  title: { fontSize: 26, fontWeight: 'bold', marginBottom: 20, color: '#ff6f00' },
  input: { borderWidth: 1, borderColor: '#e63946', padding: 12, width: '80%', marginBottom: 12, borderRadius: 6, backgroundColor: '#fff', color: '#000' },
  errorBox: { backgroundColor: '#ff6f00', borderRadius: 8, padding: 10, marginBottom: 10, width: '80%', alignItems: 'center' },
  errorText: { color: '#000', fontWeight: 'bold', textAlign: 'center' },
  buttonGroup: { width: '80%', marginTop: 20, alignItems: 'center' },
  customButton: { backgroundColor: '#ff6f00', paddingVertical: 12, borderRadius: 8, width: '100%', alignItems: 'center', marginBottom: 12 },
  customButtonText: { color: '#fff', fontSize: 16, fontWeight: 'bold' },
  linkText: { color: '#9d4edd', fontSize: 16, marginTop: 8, textDecorationLine: 'underline' },
});
