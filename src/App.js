import { ThemeProvider, Typography, createTheme } from "@mui/material";
import { MakeForm } from "./Components/MakeForm";
import "./styles.css";
import { Form } from "./Components/Fields/Form";
export default function App() {
  
  return (
    
    <div className="App">
      {/* <MakeForm /> */}
      <Form />
    </div>
    
  );
}
