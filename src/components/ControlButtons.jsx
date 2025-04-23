import { Box, Button, IconButton } from "@mui/material";
import RestartAltIcon from "@mui/icons-material/RestartAlt";

const ControlButtons = ({
  isRunning,
  start,
  stop,
  reset,
  isSoundOn,
  toggleSound,
}) => (
  <Box
    sx={{
      width: "100%",
      display: "flex",
      justifyContent: "center",
      gap: "10px",
      margin: 2,
    }}
  >
    <IconButton color="default" aria-label="toggle sound" onClick={toggleSound}>
      {isSoundOn ? "🔊" : "🔇"}
    </IconButton>

    <Button
      sx={{
        width: "250px",
        fontSize: "20px",
        bgcolor: isRunning ? "#9e9e9e" : "primary.main",
      }}
      variant="contained"
      onClick={isRunning ? stop : start}
    >
      {isRunning ? "Stop" : "Start"}
    </Button>

    <IconButton color="default" aria-label="reset timer" onClick={reset}>
      <RestartAltIcon fontSize="large" />
    </IconButton>
  </Box>
);

export default ControlButtons;
