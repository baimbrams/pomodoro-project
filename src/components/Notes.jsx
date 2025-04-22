import React, { useState } from "react";
import { Box, Typography, TextField, Button } from "@mui/material";

const NotesSection = () => {
  const [notes, setNotes] = useState("");

  const handleClear = () => {
    setNotes("");
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 4,
      }}
    >
      <Box sx={{ width: "100%", maxWidth: 600, margin: 2 }}>
        <Typography variant="h5" fontWeight="bold" color="primary" mb={1}>
          Notes
        </Typography>
        <TextField
          placeholder="Tuliskan fokus atau gangguanmu disini..."
          multiline
          rows={4}
          fullWidth
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
          sx={{ mb: 2 }}
        />
        <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
          <Button
            variant="outlined"
            color="primary"
            onClick={handleClear}
            sx={{ fontWeight: "bold" }}
          >
            CLEAR NOTES
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default NotesSection;
