import React from "react";
import Button from "@mui/material/Button";
import RestartAltIcon from "@mui/icons-material/RestartAlt";
import IconButton from "@mui/material/IconButton";
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
      <Button
        sx={{ width: "250px", fontSize: "20px" }}
        variant="contained"
        color="primary"
      >
        Start
      </Button>
      <IconButton color="#919498" aria-label="add an alarm">
        <RestartAltIcon fontSize="large" />
      </IconButton>
    </Box>
  );
};

export default CustomButton;
