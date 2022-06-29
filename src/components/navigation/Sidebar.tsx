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
const Sidebar = () => {
  return (
    <Box bgcolor="lightblue">
      <Box height="100vh" width="300px">
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
            <ListItemButton>
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
  );
};

export default Sidebar;
