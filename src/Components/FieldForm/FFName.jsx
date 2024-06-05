import { FormControl, FormHelperText, TextField } from "@mui/material"

export const FFName = ({setFieldForm,error}) => {
    return (
    
    <>
        <label style={{ fontWeight: "bold" }}>Name</label>
        <TextField
          placeholder="Name of field [FirstName | LastName ...]"
          name="name"
          error={error}
          helperText={error}
          fullWidth
          onChange={(e) => {
          setFieldForm(prev => ({
            ...prev,
            "name":e.target.value
          }))
          }}
        />
         
        </>
      
       
    )
 }