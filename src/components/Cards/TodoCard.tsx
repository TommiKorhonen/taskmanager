import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
const TodoCard = () => {
  return (
    <Card sx={{ width: "280px" }}>
      <CardContent sx={{ padding: "23px 16px" }}>
        <Typography variant="h3">Build UI for onboarding flow</Typography>
        <Typography marginTop="8px" variant="h4">
          0 of 3 subtasks
        </Typography>
      </CardContent>
    </Card>
  );
};

export default TodoCard;
