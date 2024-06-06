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
import {v4 as uuid} from 'uuid';

const AddFieldTheme = createTheme(CAA_theme);

export const Wrap = (component,size) => <Grid item xs={size}>
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
          {
            ...fieldForm,
            id: uuid()
          }
          
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
         {Wrap(<FFName setFieldForm={setFieldForm} error={error?.name}  />,12)}
         {Wrap(<FFType setFieldForm={setFieldForm} fieldForm={fieldForm} />,12)}
         {fieldForm?.values && Wrap(<FFDropValue setFieldForm={setFieldForm}  error={error?.values}   />,12)}
         {Wrap(<FFValidation setFieldForm={setFieldForm} error={error?.validations}   />,12)}
         {Wrap(<FFOrder setFieldForm={setFieldForm}   />,12)}
         {Wrap(<Button variant="contained" sx={{color: "black",backgroundColor: "#f46d40"}} onClick={handleSubmit}>Add Field</Button>,6)}
         {Wrap(<Button variant="outlined" onClick={() => setDisplayDataForm(true)}>Cancel</Button>,6)}
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
      "validations": "AlphaNumeric and Numeric can't be checked"
    }))
    return false;
  }
  if(fieldForm.validations != null && fieldForm.type == DROPDOWN && (fieldForm.validations.includes(ALPHANUMERIC) || fieldForm.validataions.includes(NUMERIC))){
    setError((prev) => ({
      ...prev,
      "validations":"Alphanumeric and numeric can't be checked at dropdown"
    }))
  }
  return true;
}
