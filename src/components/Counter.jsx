import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

const Counter = () => {
  return (
    <Card sx={{ minWidth: 275, padding: "20px", margin: "20px" }}>
      <CardContent
        sx={{
          textAlign: "center",
          bgcolor: "primary.main",
          width: "auto",
        }}
      >
        <Typography variant="h1" component="div">
          30:00
        </Typography>
      </CardContent>
    </Card>
  );
};

export default Counter;
