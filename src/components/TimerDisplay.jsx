import { Card, CardContent, Typography } from "@mui/material";

const TimerDisplay = ({ formattedTime }) => (
  <Card
    sx={{
      margin: { xs: "8px", sm: "16px" },
      borderRadius: "8px",
      display: "flex",
      justifyContent: "center",
      boxShadow: "0px 0px 0px rgba(0, 0, 0, 0.1)",
    }}
  >
    <CardContent
      sx={{
        textAlign: "center",
        bgcolor: "primary.main",
        width: {
          xs: "100%",
          sm: "350px",
        },
        borderRadius: "16px",
        paddingY: { xs: 2, sm: 3 },
        paddingX: { xs: 1, sm: 2 },
      }}
    >
      <Typography
        variant="h1"
        component="div"
        color="#FFFFFF"
        sx={{
          fontSize: { xs: "5rem", sm: "6rem", md: "7rem" },
        }}
      >
        {formattedTime}
      </Typography>
    </CardContent>
  </Card>
);

export default TimerDisplay;
