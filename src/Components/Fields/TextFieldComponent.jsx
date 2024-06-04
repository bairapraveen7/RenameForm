import { Grid, TextField } from "@mui/material";

export const TextFieldComponent = ({
    fieldItem,
    validation,
    formValue,
    setFormValues,
    setValidation
  }) => (
    <Grid item xs={6}>
    <TextField
      error={validation ? true : false}
      id="filled-error-helper-text"
      label={fieldItem.name}
      value={formValue}
      helperText={validation}
      onBlur={(e) => {
        for (const eachValidation of fieldItem.validation) {
          if (ValidationRules.get(eachValidation)(e.target.value)) {
            setValidation({
              [fieldItem.id]: errorMessages[eachValidation]
            }
            )
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
      variant="filled"
    />
    </Grid>
  );
  
  