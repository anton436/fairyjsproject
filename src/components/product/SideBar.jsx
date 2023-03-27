import React, { useEffect, useState } from "react";
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
import { useSearchParams } from "react-router-dom";
import { useProducts } from "../../contexts/ProductContextProvider";
const SideBar = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [search, setSearch] = useState(searchParams.get("q") || "");
  const { fetchByParams, getProducts } = useProducts();
  useEffect(() => {
    setSearchParams({ q: search });
    getProducts();
  }, [search]);

  return (
    <Grid item md={4}>
      <Paper elevation={1} sx={{ width: "200px", boxShadow: "none" }}>
        <TextField
          id="standard-basic"
          label="Search"
          variant="standard"
          fullWidth
          onChange={(e) => setSearch(e.target.value)}
          value={search}
        />

        <Grid>
          <FormControl>
            <FormLabel id="demo-radio-buttons-group-label">Type</FormLabel>
            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              defaultValue="all"
              name="radio-buttons-group"
              onChange={(e) => fetchByParams("type", e.target.value)}
            >
              <FormControlLabel value="sofa" control={<Radio />} label="sofa" />
              <FormControlLabel value="bed" control={<Radio />} label="bed" />
              <FormControlLabel
                value="Armchair"
                control={<Radio />}
                label="armchair"
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
