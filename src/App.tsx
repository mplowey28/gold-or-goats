import {
  Box,
  createTheme,
  Stack,
  ThemeProvider,
  Typography,
} from "@mui/material";
import Goat from "./assets/images/goat.png";
import Gold from "./assets/images/goldBars.png";
import RoundSelect from "./components/RoundSelect";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={darkTheme}>
        <Stack
          bgcolor="background.default"
          textAlign="center"
          justifyContent="center"
          height="100vh"
          width="100%"
        >
          <Typography color="text.primary" variant="h3">
            Welcome to Gold or Goats
          </Typography>
          <Stack
            alignItems="center"
            direction="row"
            justifyContent="center"
            my={2}
          >
            <Box
              component="img"
              sx={{ height: 98, width: 98 }}
              src={Gold}
              alt="gold bars"
            />
            <Typography variant="h1"> || </Typography>
            <Box
              component="img"
              sx={{ height: 98, width: 98 }}
              src={Goat}
              alt="gold bars"
            />
          </Stack>
          <RoundSelect />
        </Stack>
      </ThemeProvider>
    </div>
  );
}

export default App;
