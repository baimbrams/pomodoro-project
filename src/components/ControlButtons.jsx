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
    <IconButton
      color="default"
      aria-label="toggle sound"
      onClick={toggleSound}
      sx={{ fontSize: { xs: "1.5rem", sm: "2rem" } }}
    >
      {isSoundOn ? "🔊" : "🔇"}
    </IconButton>

    <Button
      sx={{
        width: "350px",
        fontSize: "20px",
        bgcolor: isRunning ? "#9e9e9e" : "primary.main",
      }}
      variant="contained"
      onClick={isRunning ? stop : start}
    >
      {isRunning ? "Pause" : "Start"}
    </Button>

    <IconButton
      color="default"
      aria-label="reset timer"
      onClick={reset}
      sx={{ fontSize: { xs: "1.5rem", sm: "2rem" }, mt: { xs: 1, sm: 0 } }}
    >
      <RestartAltIcon fontSize="large" />
    </IconButton>
  </Box>
);

export default ControlButtons;
