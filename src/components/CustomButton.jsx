import React from "react";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import RestartAltIcon from "@mui/icons-material/RestartAlt";
import { Box } from "@mui/material";

const CustomButton = () => {
  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        gap: "10px",
        margin: 2,
      }}
    >
      <Button variant="contained" color="primary" startIcon={<SendIcon />}>
        Mulai
      </Button>
      <Button
        variant="contained"
        color="error"
        startIcon={<RestartAltIcon />}
      ></Button>
    </Box>
  );
};

export default CustomButton;
