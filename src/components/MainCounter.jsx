import { Box } from "@mui/material";
import ModeCard from "./ModeCard";
import TimerDisplay from "./TimerDisplay";
import ControlButtons from "./ControlButtons";
import { usePomodoroTimer } from "../hooks/usePomodoroTimer";
import { pink, indigo, blueGrey } from "@mui/material/colors";
import PendingActionsIcon from "@mui/icons-material/PendingActions";
import CoffeeMakerIcon from "@mui/icons-material/CoffeeMaker";
import LocalDiningIcon from "@mui/icons-material/LocalDining";
import Background from "./BackgroundImage";
import Typography from "@mui/material/Typography";
import NotesSection from "./Notes";

const modeOptions = [
  {
    label: "focus",
    title: "Focus",
    color: pink[300],
    Icon: PendingActionsIcon,
  },
  {
    label: "short",
    title: "Short Break",
    color: indigo[200],
    Icon: CoffeeMakerIcon,
  },
  {
    label: "long",
    title: "Long Break",
    color: blueGrey[300],
    Icon: LocalDiningIcon,
  },
];

const MainLayout = () => {
  const {
    mode,
    formattedTime,
    MODES,
    changeMode,
    isRunning,
    start,
    reset,
    stop,
    isSoundOn,
    toggleSound,
  } = usePomodoroTimer();

  const getTime = (label) =>
    isRunning && mode === label ? formattedTime : MODES[label].time;

  return (
    <>
      <Background />

      <Typography
        sx={{ textAlign: "center", mt: 2, fontWeight: "bold" }}
        color="primary"
        variant="h3"
      >
        Pomodoro App
      </Typography>

      <TimerDisplay formattedTime={formattedTime} />

      <Box
        sx={{
          display: "flex",
          flexDirection: {
            xs: "column",
            sm: "row",
          },
          justifyContent: {
            xs: "center",
            sm: "center",
          },
          alignItems: {
            xs: "center",
            sm: "stretch",
          },
          gap: {
            xs: 1,
            sm: 2,
            md: 3,
          },
          flexWrap: "wrap",
          margin: "16px",
        }}
      >
        {modeOptions.map(({ label, title, color, Icon }) => (
          <ModeCard
            key={label}
            title={title}
            color={color}
            Icon={Icon}
            isActive={mode === label}
            subtitleColor={mode === label ? "white" : color}
            time={getTime(label)}
            onClick={() => changeMode(label)}
          />
        ))}
      </Box>

      <ControlButtons
        isRunning={isRunning}
        start={start}
        stop={stop}
        reset={reset}
        isSoundOn={isSoundOn}
        toggleSound={toggleSound}
      />
      <NotesSection />

      <Background />
    </>
  );
};

export default MainLayout;
