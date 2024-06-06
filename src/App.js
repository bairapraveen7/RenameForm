import { ThemeProvider, Typography, createTheme } from "@mui/material";
import { MakeForm } from "./Components/DataForm/MakeForm";
import "./styles.css";
import { Form } from "./Components/FieldForm/Form";
import { DisplayContext } from "./Hooks/useDisplay";
import { useState } from "react";
import { data } from "./Data/formData";
export default function App() {
  const [displayDataForm,setDisplayDataForm] = useState(true);
  const [formData,setFormData] = useState(data);
  
  return (
    <DisplayContext.Provider value={setDisplayDataForm}>
    <div className="App">
      {displayDataForm == true ? <MakeForm formData={formData}/> : <Form setFormData={setFormData}/> }
    </div>
    </DisplayContext.Provider>
    
  );
}
