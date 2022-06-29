import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
const Navbar = ({ sidebarWidth }: { sidebarWidth: number }) => {
  return (
    <AppBar sx={{ width: `calc(100% - ${sidebarWidth}px)` }}>
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Platform Launch
        </Typography>
        <Button startIcon={<AddIcon />} variant="outlined" color="inherit">
          Add New Task
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
