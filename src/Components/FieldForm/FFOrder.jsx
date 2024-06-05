import { Grid, Stack, TextField } from "@mui/material"

export const FFOrder = ({setFieldForm}) => {
    return (
        <> 
        <label style={{ fontWeight: "bold" }}>Order</label>
        <TextField
          placeholder="Enter Order"
          fullWidth
          onChange={(e) => {
            setFieldForm(prev => ({
              ...prev,
              "order":e.target.value
            }))
            }}
        /></>
    
    )
}