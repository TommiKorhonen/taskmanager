import { createTheme, ThemeProvider } from "@mui/material/styles";
import Stack from "@mui/material/Stack";
import { CssBaseline } from "@mui/material";
import Sidebar from "./components/navigation/Sidebar";
import Navbar from "./components/navigation/Navbar";
import TodoColumn from "./components/TodoColumn";
import { Box } from "@mui/system";
const theme = createTheme({
  components: {
    // Name of the component
  },
  palette: {
    primary: {
      main: "#635FC7",
    },
  },
  typography: {
    fontFamily: ["Plus Jakarta Sans", "sans-serif"].join(","),
    h1: {
      fontWeight: 700,
      fontSize: "24px",
      lineHeight: "30px",
    },
    h2: {
      fontWeight: 700,
      fontSize: "18px",
      lineHeight: "23px",
    },
    h3: {
      fontWeight: 700,
      fontSize: "15px",
      lineHeight: "19px",
    },
    h4: {
      fontWeight: 700,
      fontSize: "12px",
      lineHeight: "15px",
      letterSpacing: "2.4px",
    },
  },
});

const sidebarWidth = 300;
function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Stack direction="row" bgcolor="#F4F7FD">
        <Navbar sidebarWidth={sidebarWidth} />
        <Sidebar sidebarWidth={sidebarWidth} />
        <Box display="flex" gap="24px" marginLeft="24px" marginTop="88px">
          <TodoColumn />
          <TodoColumn />
        </Box>
      </Stack>
    </ThemeProvider>
  );
}

export default App;
