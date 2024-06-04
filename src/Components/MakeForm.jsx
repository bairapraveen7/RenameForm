import { Box, Button, FormControl, Grid } from "@mui/material";
import React, { useState } from "react";
import { formData } from "../Data/formData";
import { MakeField } from "./MakeField";
import { ValidationRules, errorMessages } from "./ValidationRules";

export const MakeForm = () => {
  const [validation, setValidation] = useState({});
  const [formValues, setFormValues] = useState({});

  const handleSubmit = () => {
    const tempValidation = {};
    formData.map((eachItem) => {
      eachItem.validation.map((eachValidation) => {
        if (ValidationRules.get(eachValidation)(formValues[eachItem.id]) == true) {
          tempValidation[eachItem.id] = errorMessages[eachValidation];
        }
      });
    });
    if (Object.keys(tempValidation).length != 0){
      setValidation(tempValidation);
    }
  };

  return (
    <Box>
      <Grid container spacing={2}>
        {formData.map((eachItem) => {
          return (
            <MakeField
              fieldItem={eachItem}
              validationMessage={validation[eachItem.id]}
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
    </Box>
  );
};
