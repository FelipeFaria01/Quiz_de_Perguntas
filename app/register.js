import React, { useState, useRef, useEffect } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Animated, Dimensions } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useRouter } from 'expo-router';

const { width, height } = Dimensions.get("window");

export default function RegisterScreen() {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [darkMode, setDarkMode] = useState(true);
  const router = useRouter();

  // Criar estrelas animadas
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

  const handleRegister = async () => {
    if (!name || !password || !confirmPassword) {
      setError('Preencha todos os campos');
      return;
    }
    if (password !== confirmPassword) {
      setError('As senhas não coincidem');
      return;
    }

    const rankingData = await AsyncStorage.getItem('ranking');
    let ranking = rankingData ? JSON.parse(rankingData) : [];

    const exists = ranking.find(p => p.name.toLowerCase() === name.toLowerCase());
    if (exists) {
      setError('Usuário já cadastrado. Faça login.');
      return;
    }

    const newUser = { name, password };
    ranking.push(newUser);

    await AsyncStorage.setItem('ranking', JSON.stringify(ranking));
    await AsyncStorage.setItem('username', JSON.stringify(newUser));

    // 🔒 inicializa recompensa bloqueada para novos usuários
    await AsyncStorage.setItem('rewardUnlocked', 'false');

    setError('');
    router.replace('/'); // volta para login
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

      <Text style={theme.title}>Cadastro</Text>

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
      <TextInput
        style={theme.input}
        placeholder="Confirme sua senha"
        placeholderTextColor={darkMode ? "#aaa" : "#555"}
        value={confirmPassword}
        onChangeText={setConfirmPassword}
        secureTextEntry
      />

      {error ? (
        <View style={theme.errorBox}>
          <Text style={theme.errorText}>{error}</Text>
        </View>
      ) : null}

      <View style={theme.buttonGroup}>
        <TouchableOpacity style={theme.customButton} onPress={handleRegister}>
          <Text style={theme.customButtonText}>Cadastrar</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => router.replace('/')}>
          <Text style={theme.linkText}>Voltar para Login</Text>
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
