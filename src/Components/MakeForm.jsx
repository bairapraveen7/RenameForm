import { Box, Button, Container, FormControl, Grid, Typography, createTheme } from "@mui/material";
import React, { useState } from "react";
import { formData } from "../Data/formData";
import { MakeField } from "./MakeField";
import { Validations } from "./ValidationRules";
import { lightBlue } from "@mui/material/colors";

/*
  Here, we need to add the styles
  1. Decrease the width of container by adding it to the theme 
  2. Increase the boldness of label
  3. Add Background label
  4. Just Reacreate it
*/

export const MakeForm = () => {
  const [validation, setValidation] = useState({});
  const [formValues, setFormValues] = useState({});
  const theme = createTheme({
    palette:{
      primary:{
        main: '#f7ede8',
        mainHeading: '#e69e6e',
        bgColor:'#f7ede8'
      }
    }
  })

  const handleSubmit = () => {
    const tempValidation = {};
    formData.map((eachItem) => {
      eachItem.validation.map((eachValidation) => {
        if (Validations[eachValidation].fn(formValues[eachItem.id]) == true) {
          tempValidation[eachItem.id] = Validations[eachValidation].message;
        }
      });
    });
    if (Object.keys(tempValidation).length != 0){
      setValidation(tempValidation);
    }
  };

  return (
    <Box>
      <Container sx={{ width: '60%'}}>
      <Typography sx={{color: theme.palette.primary.mainHeading}} variant="h3">CAA</Typography>
      <Typography sx={{m: '2rem',p:1, backgroundColor: theme.palette.primary.bgColor}} variant="h4">Dynamic Form</Typography>
      <Grid container spacing={4}>
        {formData.map((eachItem) => {
          return (
            <MakeField
              fieldItem={eachItem}
              validation={validation[eachItem.id]}
              fieldValue={formValues[eachItem.id]}
              setFormValues={setFormValues}
              setValidation={setValidation}
            />
          );
        })}
        <Grid item xs={12}>
      <Button sx={{ float: 'right'}} variant="contained" color="success" onClick={handleSubmit}>
        Submit
      </Button>
      </Grid>
      </Grid>
      </Container>
    </Box>
  );
};
