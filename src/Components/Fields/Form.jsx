import {
  Box,
  Checkbox,
  Container,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormLabel,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  TextField,
  Typography,
  createTheme,
} from "@mui/material";
import React from "react";
import { CAA_theme } from "../MakeForm";

const AddFieldTheme = createTheme(CAA_theme);

export const Form = () => {
  return (
    <Box>
      <Container sx={{ width: "70%" }}>
        <Typography
          sx={{
            m: "2rem",
            p: 1,
            backgroundColor: CAA_theme.palette.primary.bgColor,
          }}
          variant="h4"
        >
          Add Field
        </Typography>
        <Grid container sx={{ width: "40%", mx: "auto" }} spacing={4}>
          <Grid item xs={12}>
            <Stack alignItems="start" spacing={2}>
              <label style={{ fontWeight: "bold" }}>Name</label>
              <TextField
                placeholder="Name of field [FirstName | LastName ...]"
                fullWidth
              />
            </Stack>
          </Grid>
          <Grid item xs={12}>
            <Stack alignItems="start" spacing={2}>
              <label style={{ fontWeight: "bold" }}>Type Of Field</label>
              <FormControl
                sx={{ m: 1, width: "100%" }}
              >
                <InputLabel>Type Of Field</InputLabel>
                <Select>
                   <MenuItem>TextField</MenuItem>
                   <MenuItem>DropDown</MenuItem>
                </Select>
              </FormControl>
            </Stack>
          </Grid>
          <Grid item xs={12}>
            <Stack alignItems="start" spacing={2}>
              <label style={{ fontWeight: "bold" }}>Validations</label>
              <FormControl sx={{ m: 3 }} component="fieldset" variant="standard">
        <FormLabel component="legend">Select Validations</FormLabel>
        <FormGroup>
          <FormControlLabel
            control={
              <Checkbox  name="Required" />
            }
            label="Requried"
          />
          <FormControlLabel
            control={
              <Checkbox  name="Email" />
            }
            label="Email"
          />
          <FormControlLabel
            control={
              <Checkbox  name="AlphaNumeric" />
            }
            label="AlphaNumeric"
          />
          <FormControlLabel
            control={
              <Checkbox  name="Numeric" />
            }
            label="Only Numeric"
          />
        </FormGroup>
      </FormControl>
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};
