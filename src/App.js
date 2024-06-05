import { ThemeProvider, Typography, createTheme } from "@mui/material";
import { MakeForm } from "./Components/DataForm/MakeForm";
import "./styles.css";
import { Form } from "./Components/FieldForm/Form";
import { DisplayContext } from "./Hooks/useDisplay";
import { useState } from "react";
import { ThemeContext } from "@emotion/react";
export default function App() {
  const [displayDataForm,setDisplayDataForm] = useState(true);
  
  return (
    <DisplayContext.Provider value={setDisplayDataForm}>
    <div className="App">
      {displayDataForm == true ? <MakeForm /> : <Form /> }
    </div>
    </DisplayContext.Provider>
    
  );
}
