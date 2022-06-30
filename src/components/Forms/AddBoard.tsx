import Typography from "@mui/material/Typography";
import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import { Button } from "@mui/material";
import { useDispatch } from "react-redux";
import { addBoard } from "../../features/boardSlice";
import { v4 as uuidv4 } from "uuid";
const AddBoard = ({ closeModal }: { closeModal: () => void }) => {
  const [name, setName] = useState("");
  const dispatch = useDispatch();
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(
      addBoard({
        id: uuidv4(),
        name,
        columns: [],
      })
    );
    closeModal();
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
      <Button type="submit" fullWidth variant="contained">
        Create New Board
      </Button>
    </form>
  );
};

export default AddBoard;
