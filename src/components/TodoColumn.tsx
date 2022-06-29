import Box from "@mui/system/Box";
import CircleIcon from "@mui/icons-material/Circle";
import { Typography } from "@mui/material";
import TodoCard from "./Cards/TodoCard";

const TodoColumn = () => {
  return (
    <Box display="flex" flexDirection="column" gap="24px">
      <Box display="flex" gap="12px">
        <CircleIcon color="primary" />
        <Typography display="flex" gap="5px">
          TODO <span>(4)</span>
        </Typography>
      </Box>
      <TodoCard />
      <TodoCard />
      <TodoCard />
    </Box>
  );
};

export default TodoColumn;
