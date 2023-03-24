import { Grid, Paper, TextField } from "@mui/material";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";

const SideBar = () => {
  return (
    <Grid item md={4}>
      <Paper elevation={5} sx={{ width: "200px" }}>
        <TextField
          id="standard-basic"
          label="Standard"
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
              <FormControlLabel
                value="sofas"
                control={<Radio />}
                label="sofas"
              />
              <FormControlLabel value="beds" control={<Radio />} label="beds" />
              <FormControlLabel
                value="other"
                control={<Radio />}
                label="Other"
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
