import { useState, useEffect } from "react";

const MODES = {
  focus: { label: "Focus", time: 25 * 60 },
  short: { label: "Short Break", time: 5 * 60 },
  long: { label: "Long Break", time: 15 * 60 },
};

export function usePomodoroTimer(initialMode = "focus") {
  const [mode, setMode] = useState(initialMode);
  const [timeLeft, setTimeLeft] = useState(MODES[mode].time);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    setTimeLeft(MODES[mode].time);
  }, [mode]);

  useEffect(() => {
    let timer;
    if (isRunning && timeLeft > 0) {
      timer = setInterval(() => {
        setTimeLeft((prev) => prev - 1);
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [isRunning, timeLeft]);

  const start = () => setIsRunning(true);
  const reset = () => {
    setIsRunning(false);
    setTimeLeft(MODES[mode].time);
  };
  const changeMode = (newMode) => {
    setIsRunning(false);
    setMode(newMode);
  };

  return {
    mode,
    timeLeft,
    isRunning,
    start,
    reset,
    changeMode,
    formattedTime: formatTime(timeLeft),
    MODES,
  };
}

function formatTime(seconds) {
  const m = Math.floor(seconds / 60)
    .toString()
    .padStart(2, "0");
  const s = (seconds % 60).toString().padStart(2, "0");
  return `${m}:${s}`;
}
