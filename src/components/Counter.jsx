import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";

const Counter = () => {
  return (
    <Box sx={{ display: "flex", justifyContent: "center", marginBottom: 2 }}>
      <Card sx={{ padding: "10px", margin: "10px", borderRadius: "8px" }}>
        <CardContent
          sx={{
            textAlign: "center",
            bgcolor: "primary.main",
            width: "350px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: "16px",
          }}
        >
          <Typography variant="h1" component="div" color="#FFFFFF">
            30:00
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
};

export default Counter;
