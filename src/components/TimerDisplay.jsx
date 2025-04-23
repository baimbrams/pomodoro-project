import { Card, CardContent, Typography } from "@mui/material";

const TimerDisplay = ({ formattedTime }) => (
  <Card sx={{ padding: "10px", margin: "10px", borderRadius: "8px" }}>
    <CardContent
      sx={{
        textAlign: "center",
        bgcolor: "primary.main",
        width: "350px",
        borderRadius: "16px",
      }}
    >
      <Typography variant="h1" component="div" color="#FFFFFF">
        {formattedTime}
      </Typography>
    </CardContent>
  </Card>
);

export default TimerDisplay;
