import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/Inbox";
import DraftsIcon from "@mui/icons-material/Drafts";
import LightModeIcon from "@mui/icons-material/LightMode";
import ModeNightIcon from "@mui/icons-material/ModeNight";
import Switch from "@mui/material/Switch";
import AddIcon from "@mui/icons-material/Add";
import BasicModal from "../Modal/BasicModal";
import AddBoard from "../Forms/AddBoard";
import { useState } from "react";

const Sidebar = ({ sidebarWidth }: { sidebarWidth: number }) => {
  const [open, setOpen] = useState(false);
  const closeModal = () => {
    setOpen(false);
  };
  return (
    <>
      <Box bgcolor="white">
        <Box overflow="hidden" height="100vh" width={sidebarWidth}>
          <Box margin="32px">
            <img src="./assets/logo-dark.svg" alt="" />
          </Box>

          <Typography margin="32px" variant="h4" component="span">
            All Boards (3)
          </Typography>
          <List>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <InboxIcon />
                </ListItemIcon>
                <ListItemText primary="Inbox" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton onClick={() => setOpen(true)}>
                <ListItemIcon>
                  <DraftsIcon />
                </ListItemIcon>
                <AddIcon />
                <ListItemText primary="Create New Board" />
              </ListItemButton>
            </ListItem>
          </List>
          <Box marginX="24px" bgcolor=" #F4F7FD">
            <ListItem
              disablePadding
              sx={{ display: "flex", justifyContent: "center" }}
            >
              <LightModeIcon />
              <Switch />
              <ModeNightIcon />
            </ListItem>
          </Box>
        </Box>
      </Box>
      <BasicModal open={open}>
        <AddBoard closeModal={closeModal} />
      </BasicModal>
    </>
  );
};

export default Sidebar;
