import {
  FormControl,
  FormHelperText,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";

export const TextFieldComponent = ({
  name,
  id,
  validation,
  formValue,
  setFormValues,
}) => (
  <TextField
    error={validation ? true : false}
    id="filled-error-helper-text"
    label={name}
    value={formValue}
    helperText={validation}
    onChange={(e) => {
      setFormValues((prev) => ({
        ...prev,
        [id]: e.target.value,
      }));
    }}
    variant="filled"
  />
);

export const SelectFieldComponent = ({
  id,
  name,
  dropdownValues,
  formValue,
  validation,
  setFormValues,
}) => (
  <FormControl sx={{ m: 1, minWidth: 120 }} error={validation ? true : false}>
    <InputLabel id="demo-simple-select-error-label">{name}</InputLabel>
    <Select
      labelId="demo-simple-select-error-label"
      id="demo-simple-select-error"
      value={formValue}
      label={name}
      onChange={(e) => {
        setFormValues((prev) => ({
          ...prev,
          [id]: e.target.value,
        }));
      }}
    >
      {dropdownValues?.map((eachValue) => (
        <MenuItem value={eachValue}>{eachValue}</MenuItem>
      ))}
    </Select>
    <FormHelperText>{validation}</FormHelperText>
  </FormControl>
);
