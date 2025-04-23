import { ThemeProvider, Typography, createTheme } from "@mui/material";
import { MakeForm } from "./Components/DataForm/MakeForm";
import "./styles.css";
import { Form } from "./Components/FieldForm/Form";
import { DisplayContext } from "./Hooks/useDisplay";
import { useState } from "react";
import { data } from "./Data/formData";
export default function App() {
  const [displayDataForm,setDisplayDataForm] = useState(true);
  const [formData,setFormData] = useState([]);
  const [formValues,setFormValues] = useState({});
  
  return (
    <DisplayContext.Provider value={setDisplayDataForm}>
    <div className="App">
      <h1>idhi extra royy</h1>
      {displayDataForm == true ? <MakeForm formData={formData} formValues={formValues} setFormValues={setFormValues}/> : <Form setFormData={setFormData}/> }
    </div>
    </DisplayContext.Provider>
  
  );
}
