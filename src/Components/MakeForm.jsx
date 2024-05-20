import { Button, FormControl } from "@mui/material";
import React, { useState } from "react";
import { formData } from "../Data/formData";
import { MakeField } from "./MakeField";
import { ValidationRules } from "./ValidationRules";

export const MakeForm = () => {
  const [validation, setValidation] = useState({});
  const [formValues, setFormValues] = useState({});
  const handleSubmit = () => {
    const tempValidation = {};
    formData.map((eachItem) => {
      eachItem.validation.map((eachValidation) => {
        if (ValidationRules.get(eachValidation)(formValues[eachItem.id])) {
          tempValidation[eachItem.id] = eachValidation + " Error";
        }
      });
    });
    if (Object.keys.length == 0) {
    } else {
      setValidation(tempValidation);
    }
  };

  return (
    <React.Fragment>
      <FormControl>
        {formData.map((eachItem) => {
          return (
            <MakeField
              {...eachItem}
              validation={validation[eachItem.id]}
              formValue={formValues[eachItem.id]}
              setFormValues={setFormValues}
            />
          );
        })}
      </FormControl>
      <Button variant="contained" color="success" onClick={handleSubmit}>
        Submit
      </Button>
    </React.Fragment>
  );
};
