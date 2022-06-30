import Typography from "@mui/material/Typography";
import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import { Button } from "@mui/material";
const AddBoard = () => {
  const [name, setName] = useState("");
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(name);
  };
  return (
    <form onSubmit={handleSubmit}>
      <Typography marginBottom="24px" variant="h2">
        Add new Board
      </Typography>
      <Box marginBottom="24px">
        <InputLabel htmlFor="name" sx={{ marginBottom: "8px" }}>
          Name
        </InputLabel>
        <TextField
          onChange={(e) => setName(e.target.value)}
          id="name"
          fullWidth
          placeholder="e.g. Web Design"
        />
      </Box>
      <Button fullWidth variant="contained">
        Create New Board
      </Button>
    </form>
  );
};

export default AddBoard;
