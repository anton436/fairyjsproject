
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
    
      <Paper elevation={1} sx={{ width: "200px", boxShadow: "none" }}>
        <TextField
          id="standard-basic"
          label="Search"
          variant="standard"
          fullWidth
        />

        <Grid>
          <FormControl>
            <FormLabel id="demo-radio-buttons-group-label">Type</FormLabel>
            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              defaultValue="all"
              name="radio-buttons-group"
            >

              <FormControlLabel value="sofa" control={<Radio />} label="sofa" />
              <FormControlLabel value="bed" control={<Radio />} label="bed" />
              <FormControlLabel
                value="pillow"
                control={<Radio />}
                label="pillow"
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
                label="less than 200$"
              />
              <FormControlLabel
                value="500"
                control={<Radio />}
                label="less than 500$"
              />
              <FormControlLabel
                value="1000"
                control={<Radio />}
                label="less than 1000$"
              />
            </RadioGroup>
          </FormControl>
        </Grid>
      </Paper>
    </Grid>
  );
};

export default SideBar;
