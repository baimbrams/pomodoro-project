import Counter from "./components/counter";
import Typography from "@mui/material/Typography";
import Cardlist from "./components/Cardlist";
import CustomButton from "./components/CustomButton";
import NotesSection from "./components/Notes";
import Background from "./components/BackgroundImage";

function App() {
  return (
    <>
      <Background />
      <Typography
        sx={{ textAlign: "center", mt: 2, fontWeight: "bold" }}
        color="primary"
        variant="h2"
      >
        Pomodoro App
      </Typography>

      <Counter />
      <Cardlist />
      <CustomButton />
      <NotesSection />
      <Background />
    </>
  );
}

export default App;
