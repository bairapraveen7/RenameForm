import {
  Box,
  Button,
  Checkbox,
  Container,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormLabel,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  TextField,
  Typography,
  createTheme,
} from "@mui/material";
import React, { useContext, useState } from "react";
import { CAA_theme } from "../DataForm/MakeForm";
import { FFName } from "./FFName";
import { FFType } from "./FFType";
import { FFValidation } from "./FFValidation";
import { FFDropValue } from "./FFDropValue";
import { FFOrder } from "./FFOrder";
import { ALPHANUMERIC, DROPDOWN, EMAIL, NUMERIC, TEXTFIELD } from "../../config";
import { DisplayContext } from "../../Hooks/useDisplay";

const AddFieldTheme = createTheme(CAA_theme);

export const Wrap = (component) => <Grid item xs={12}>
<Stack alignItems="start" spacing={2}>
  {component}
  </Stack></Grid>

export const Form = ({setFormData}) => {
  const [fieldForm,setFieldForm] = useState({type: TEXTFIELD});
  const [error,setError] = useState({});
  const setDisplayDataForm = useContext(DisplayContext);

  const handleSubmit = () => {
    let first = checkName(fieldForm,setError);
    let second = checkValues(fieldForm,setError);
    let third = checkValidations(fieldForm,setError);
    if(first  && second  && third ){
        setFormData((prev) =>  [
          ...prev,
          fieldForm
        ])
        setDisplayDataForm(true);
    }
  }
  return (
    <Box>
      <Container sx={{ width: "70%" }}>
        <Typography
          sx={{
            m: "2rem",
            p: 1,
            backgroundColor: CAA_theme.palette.primary.bgColor,
          }}
          variant="h4"
        >
          Add Field
        </Typography>
        <Grid container sx={{ width: "40%", mx: "auto" }} spacing={4}>
         {Wrap(<FFName setFieldForm={setFieldForm} error={error?.name}   />)}
         {Wrap(<FFType setFieldForm={setFieldForm} fieldForm={fieldForm} />)}
         {fieldForm?.values && Wrap(<FFDropValue setFieldForm={setFieldForm}  error={error?.values}   />)}
         {Wrap(<FFValidation setFieldForm={setFieldForm} error={error?.validations}   />)}
         {Wrap(<FFOrder setFieldForm={setFieldForm}   />)}
         {Wrap(<Button variant="contained" sx={{color: "black",backgroundColor: "#f46d40"}} onClick={handleSubmit}>Add Field</Button>)}
        </Grid>
      </Container>
    </Box>
  );
};

const checkName = (fieldForm,setError) => {
    if(fieldForm.name == null){
      setError((prev) => ({
        ...prev,
        "name":"name can't be blank"
      }))
      return false;
    }
    return true;
};

const checkValues = (fieldForm,setError) => {
  
    if(fieldForm.type == DROPDOWN && fieldForm.values.length < 1){
       setError((prev) => ({
        ...prev,
        "values":"Values can't be empty"
       }))
       return false;
    }
    return true;
};

const checkValidations = (fieldForm,setError) => {
  if(fieldForm.validations == null || (fieldForm.validations.includes(ALPHANUMERIC) && fieldForm.validations.includes(NUMERIC))){
    setError((prev) => ({
      ...prev,
      "validations":"AlphaNumeric and Numeric can't be checked"
    }))
    return false;
  }
  return true;
   
}
