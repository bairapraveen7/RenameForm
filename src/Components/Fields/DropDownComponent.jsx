import { FormControl, FormHelperText, Grid, InputLabel, MenuItem, Select } from "@mui/material";

export const DropDownComponent = ({
    fieldItem,
    formValue,
    validation,
    setFormValues,
    setValidation
  }) => (
    <Grid xs={6}>
    <FormControl sx={{ m: 1, minWidth: 120 }} error={validation ? true : false}>
      <InputLabel id="demo-simple-select-error-label">{fieldItem.name}</InputLabel>
      <Select
        labelId="demo-simple-select-error-label"
        id="demo-simple-select-error"
        value={formValue}
        label={fieldItem.name}
        onClose={(e) => {
          for (const eachValidation of fieldItem.validation) {
            if (ValidationRules.get(eachValidation)(e.target.value)) {
              setValidation((prev) => ({
                ...prev,
                [fieldItem.id]: errorMessages[eachValidation]
              })
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
      >
        {fieldItem.values?.map((eachValue) => (
          <MenuItem value={eachValue}>{eachValue}</MenuItem>
        ))}
      </Select>
      <FormHelperText>{validation}</FormHelperText>
    </FormControl>
    </Grid>
  );
  