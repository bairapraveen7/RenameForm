import { FormControl, FormControlLabel, FormLabel, Grid, InputLabel, Stack, TextField, Typography } from "@mui/material";
import { Validations } from "../ValidationRules";

export const TextFieldComponent = ({
    fieldItem,
    validation,
    formValue,
    setFormValues,
    setValidation
  }) => (
    <Grid item xs={6}>
      <Stack
      alignItems="start"
      spacing={2}
      >
        <label style={{fontWeight: 'bold'}}>{fieldItem.name}</label>
     
    <TextField
      aria-labelledby="its-the-label"
      error={validation ? true : false}
      id="filled-error-helper-text"
      value={formValue}
      helperText={validation}
      placeholder={fieldItem.name}
      fullWidth
      onBlur={(e) => {
        for (const eachValidation of fieldItem.validation) {
          if (Validations[eachValidation].fn(e.target.value)) {
            setValidation({
              [fieldItem.id]: Validations[eachValidation].message
            })
            break;
          }
        };
      }}
      onChange={(e) => {
        setFormValues((prev) => ({
          ...prev,
          [fieldItem.id]: e.target.value,
        }));
      }}
    />
     </Stack>
    
    </Grid>
  );
  
  