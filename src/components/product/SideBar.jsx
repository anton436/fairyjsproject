import { Gif } from "@mui/icons-material";
import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Grid,
  Paper,
  Radio,
  RadioGroup,
  TextField,
} from "@mui/material";
import React from "react";

const SideBar = () => {
  return (
    <Grid item md={4}>
      <Paper elevation={5} sx={{ width: "200px", boxShadow: "none", p: 2 }}>
        <TextField
          id="standard-basic"
          label="Search)"
          variant="standard"
          fullWidth
        />
      </Paper>

      <Grid>
        <FormControl>
          <FormLabel id="demo-radio-buttons-group-label">Type</FormLabel>
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            defaultValue="all"
            name="radio-buttons-group"
          >
            <FormControlLabel value="sofa" control={<Radio />} label="Sofa" />
            <FormControlLabel value="bed" control={<Radio />} label="Bed" />
            <FormControlLabel
              value="pillow"
              control={<Radio />}
              label="Pillow"
            />
          </RadioGroup>
        </FormControl>
      </Grid>
      <Grid>
        <FormControl>
          <FormLabel id="demo-radio-buttons-group-label">Price</FormLabel>
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            defaultValue="all"
            name="radio-buttons-group"
          >
            <FormControlLabel
              value="200"
              control={<Radio />}
              label="Less than 200$"
            />
            <FormControlLabel
              value="500"
              control={<Radio />}
              label="Less than 500$"
            />
            <FormControlLabel
              value="1000"
              control={<Radio />}
              label="Less than 1000$"
            />
          </RadioGroup>
        </FormControl>
      </Grid>
    </Grid>
  );
};

export default SideBar;
