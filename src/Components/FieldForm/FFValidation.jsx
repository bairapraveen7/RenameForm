import {
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormHelperText,
  FormLabel,
  Grid,
  Stack,
} from "@mui/material";
import { ALPHANUMERIC, EMAIL, NUMERIC, REQUIRED } from "../../config";

export const FFValidation = ({setFieldForm,error}) => {
    const handleChange = (VALUE) => {
      setFieldForm((prev) => {
        const tempArray = prev.validations || [];
        if(tempArray.includes(VALUE)){
          tempArray.filter((v) => v!=VALUE);
        }else{
          tempArray.push(VALUE);
        }
        return {
          ...prev,
          "validations":tempArray
        }
    })
    }
    return (
    <>
      <label style={{ fontWeight: "bold" }}>Validations</label>
      <FormControl sx={{ m: 3 }} component="fieldset" variant="standard" error={error}>
        <FormLabel component="legend">Select Validations</FormLabel>
        <FormGroup>
          <FormControlLabel
            control={<Checkbox name="Required" onChange={() => handleChange(REQUIRED)}/>}
            label="Requried"
          />
          <FormControlLabel control={<Checkbox name="Email" onChange={() => handleChange(EMAIL)} />} 
          label="Email" />
          <FormControlLabel
            control={<Checkbox name="AlphaNumeric" onChange={() => handleChange(ALPHANUMERIC)}/>}
            label="AlphaNumeric"
          />
          <FormControlLabel
            control={<Checkbox name="Numeric" onChange={() => handleChange(NUMERIC)} />}
            label="Only Numeric"
          />
        </FormGroup>
        <FormHelperText>{error}</FormHelperText>
      </FormControl>
    </>
  )
}
  ;
