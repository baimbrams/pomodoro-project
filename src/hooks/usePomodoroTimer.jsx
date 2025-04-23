import { useState, useEffect, useCallback, useMemo, useRef } from "react";
import notificationSound from "/notificationSound.mp3";
import relax from "/relax.mp3";

// Konstanta mode pomodoro
const POMODORO_MODES = {
  focus: { label: "Focus", time: 25 * 60 },
  short: { label: "Short Break", time: 5 * 60 },
  long: { label: "Long Break", time: 15 * 60 },
};

// Fungsi format waktu ke "MM:SS"
const formatTime = (seconds) => {
  const minutes = String(Math.floor(seconds / 60)).padStart(2, "0");
  const secs = String(seconds % 60).padStart(2, "0");
  return `${minutes}:${secs}`;
};

export const usePomodoroTimer = (initialMode = "focus") => {
  const [mode, setMode] = useState(initialMode);
  const [timeLeft, setTimeLeft] = useState(POMODORO_MODES[initialMode].time);
  const [isRunning, setIsRunning] = useState(false);
  const [isSoundOn, setIsSoundOn] = useState(true);

  const audioRef = useRef(null);

  // Update waktu saat mode berganti
  useEffect(() => {
    setTimeLeft(POMODORO_MODES[mode].time);
  }, [mode]);

  // Handle timer berjalan
  useEffect(() => {
    let timer;
    if (isRunning && timeLeft > 0) {
      timer = setInterval(() => {
        setTimeLeft((prev) => {
          const newTime = prev - 1;

          if (newTime === 0) {
            setIsRunning(false);
            if (audioRef.current) {
              audioRef.current.pause();
              audioRef.current.currentTime = 0;
            }
          }
          return newTime;
        });
      }, 1000);
    }
    document.title = `${formatTime(timeLeft)} - Pomodoro App`;
    return () => clearInterval(timer);
  }, [isRunning, timeLeft]);

  // Inisialisasi audio
  useEffect(() => {
    const audio = new Audio(relax);
    audio.loop = true;
    audioRef.current = audio;
  }, []);

  // Play / pause audio
  useEffect(() => {
    if (!audioRef.current) return;

    if (isRunning && isSoundOn) {
      audioRef.current
        .play()
        .catch((err) => console.warn("Audio play error:", err));
      return;
    }

    audioRef.current.pause();
  }, [isRunning, isSoundOn]);

  // Start timer
  const start = useCallback(() => {
    setIsRunning(true);
    const audio = new Audio(notificationSound);
    return audio.play();
  }, []);

  // Stop timer
  const stop = useCallback(() => {
    setIsRunning(false);
  }, []);

  // Reset timer
  const reset = useCallback(() => {
    setIsRunning(false);
    setTimeLeft(POMODORO_MODES[mode].time);
  }, [mode]);

  const toggleSound = useCallback(() => setIsSoundOn((prev) => !prev), []);

  // Ganti mode
  const changeMode = useCallback((newMode) => {
    setIsRunning(false);
    setMode(newMode);
  }, []);

  const formattedTime = useMemo(() => formatTime(timeLeft), [timeLeft]);

  const formattedModes = useMemo(() => {
    return Object.entries(POMODORO_MODES).reduce((acc, [key, value]) => {
      acc[key] = { ...value, time: formatTime(value.time) };
      return acc;
    }, {});
  }, []);

  return {
    mode,
    timeLeft,
    formattedTime,
    isRunning,
    start,
    reset,
    stop,
    changeMode,
    isSoundOn,
    toggleSound,
    MODES: formattedModes,
  };
};
