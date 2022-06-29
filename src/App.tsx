import { createTheme, ThemeProvider } from "@mui/material/styles";
import Stack from "@mui/material/Stack";
import { CssBaseline } from "@mui/material";
import Sidebar from "./components/navigation/Sidebar";
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

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Stack direction="row" justifyContent="space-between">
        <Sidebar />
        <Sidebar />
      </Stack>
    </ThemeProvider>
  );
}

export default App;
