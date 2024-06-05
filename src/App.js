import { ThemeProvider, Typography, createTheme } from "@mui/material";
import { MakeForm } from "./Components/MakeForm";
import "./styles.css";
export default function App() {
  const theme = createTheme({
    palette:{
      primary:{
        main: '#f7ede8'
      }
    }
  })
  return (
    <ThemeProvider theme={theme}>
    <div className="App">
      <MakeForm />
    </div>
    </ThemeProvider>
  );
}
