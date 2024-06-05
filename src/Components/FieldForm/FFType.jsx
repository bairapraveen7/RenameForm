import { FormControl, Grid, InputLabel, MenuItem, Select, Stack } from "@mui/material";
import { DROPDOWN, TEXTFIELD } from "../../config";

export const FFType = ({setFieldForm,fieldForm,error}) => (
     <>
      <label style={{ fontWeight: "bold" }}>Type Of Field</label>
      <FormControl
        sx={{ m: 1, width: "100%" }}
      >
        <InputLabel>Type Of Field</InputLabel>
        <Select
          value={fieldForm?.type || TEXTFIELD}
          onChange={(e) => {
            setFieldForm(prev => {
              const obj = {...prev};
              if(e.target.value == TEXTFIELD){
                let copyObj = {
                  ...prev,
                  "type": TEXTFIELD,
                }
                if(copyObj?.values){
                  delete copyObj.values
                }
                return copyObj;
              }else{
                return {
                  ...prev,
                  "type":DROPDOWN,
                  "values":[]
                }
              }
            }
            )
            }}
            >
           <MenuItem value={TEXTFIELD}>Textfield</MenuItem>
           <MenuItem value={DROPDOWN}>Dropdown</MenuItem>
        </Select>
      </FormControl>
   </>
)