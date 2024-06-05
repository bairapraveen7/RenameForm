import { FormControl, FormHelperText, Grid, Stack } from '@mui/material';
import { useState } from 'react';
import { TagsInput } from 'react-tag-input-component'

export const FFDropValue = ({setFieldForm,error}) => {
    const [value,setValue] = useState([]);
    return (
      <>
        <label style={{ fontWeight: "bold" }}>Add Dropdown Values & Enter</label>
        <FormControl error={error}>
        <TagsInput value={value} onChange={setValue} onBlur={() => setFieldForm((prev) => ({
          ...prev,
          "values":value
        }))} />
        <FormHelperText>{error}</FormHelperText>
        </FormControl>
        </>
    )
}