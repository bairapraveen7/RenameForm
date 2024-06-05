import { Box, Button, Container, FormControl, Grid } from "@mui/material";
import React, { useState } from "react";
import { formData } from "../Data/formData";
import { MakeField } from "./MakeField";
import { Validations } from "./ValidationRules";

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
      <Button variant="contained" color="success" onClick={handleSubmit}>
        Submit
      </Button>
      </Grid>
      </Grid>
      </Container>
    </Box>
  );
};
