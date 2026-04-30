import React, { useRef } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Platform, ScrollView, Animated, Dimensions } from "react-native";
import { useRouter } from "expo-router";
import { useVideoPlayer, VideoView } from "expo-video";

const { width, height } = Dimensions.get("window");

export default function RewardScreen() {
  const router = useRouter();
  const [darkMode, setDarkMode] = React.useState(true);
  const theme = darkMode ? darkStyles : lightStyles;

  // Player usando arquivo local
  const player = useVideoPlayer(require("./assets/video.mp4"), (player) => {
    player.play();
  });

  // Criar estrelas animadas
  const stars = Array.from({ length: 60 }).map(() => {
    const opacity = new Animated.Value(0);
    const top = Math.random() * height;
    const left = Math.random() * width;
    const size = Math.random() * 2 + 1;

    const speedCategory = Math.floor(Math.random() * 3);
    let duration;
    if (speedCategory === 0) duration = 600 + Math.random() * 800;
    else if (speedCategory === 1) duration = 1200 + Math.random() * 1500;
    else duration = 2000 + Math.random() * 2000;

    Animated.loop(
      Animated.sequence([
        Animated.timing(opacity, { toValue: 0.6, duration, useNativeDriver: true }),
        Animated.timing(opacity, { toValue: 0.1, duration, useNativeDriver: true }),
      ])
    ).start();

    return { opacity, top, left, size };
  });

  return (
    <ScrollView contentContainerStyle={theme.container}>
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

      <TouchableOpacity onPress={() => setDarkMode(!darkMode)}>
        <Text style={theme.icon}>{darkMode ? "🌙" : "☀️"}</Text>
      </TouchableOpacity>

      <Text style={theme.title}>Recompensa Especial 🎉</Text>
      <Text style={theme.subtitle}>Você desbloqueou este vídeo!</Text>

      <View style={theme.videoContainer}>
        <VideoView
          player={player}
          style={Platform.OS === "web" ? theme.videoWeb : theme.videoMobile}
          nativeControls
        />
      </View>

      <TouchableOpacity style={theme.backButton} onPress={() => router.replace("/choices")}>
        <Text style={theme.backButtonText}>←</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

// Tema escuro
const darkStyles = StyleSheet.create({
  container: { flexGrow: 1, justifyContent: "center", alignItems: "center", padding: 20, backgroundColor: "#1a001f" },
  icon: { fontSize: 32, marginBottom: 10 },
  title: { fontSize: 26, fontWeight: "bold", marginBottom: 10, color: "#9d4edd" },
  subtitle: { fontSize: 18, marginBottom: 20, color: "#fff" },
  videoContainer: { justifyContent: "center", alignItems: "center", backgroundColor: "#000", marginVertical: 20 },
  videoMobile: { width: "90%", aspectRatio: 4 / 5 },
  videoWeb: { width: 1080, height: 1350 },
  backButton: { width: 60, height: 60, borderRadius: 30, backgroundColor: "#9d4edd", justifyContent: "center", alignItems: "center", marginTop: 20 },
  backButtonText: { color: "#fff", fontSize: 24, fontWeight: "bold" },
});

// Tema claro
const lightStyles = StyleSheet.create({
  container: { flexGrow: 1, justifyContent: "center", alignItems: "center", padding: 20, backgroundColor: "#f8f9fa" },
  icon: { fontSize: 32, marginBottom: 10 },
  title: { fontSize: 26, fontWeight: "bold", marginBottom: 10, color: "#ff6f00" },
  subtitle: { fontSize: 18, marginBottom: 20, color: "#000" },
  videoContainer: { justifyContent: "center", alignItems: "center", backgroundColor: "#000", marginVertical: 20 },
  videoMobile: { width: "90%", aspectRatio: 4 / 5 },
  videoWeb: { width: 1080, height: 1350 },
  backButton: { width: 60, height: 60, borderRadius: 30, backgroundColor: "#ff6f00", justifyContent: "center", alignItems: "center", marginTop: 20 },
  backButtonText: { color: "#fff", fontSize: 24, fontWeight: "bold" },
});
