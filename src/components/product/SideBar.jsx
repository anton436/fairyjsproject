import React, { useEffect, useState } from "react";
import {
  Box,
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
import { useAuth } from "../../contexts/AuthContextProvider";
const SideBar = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [search, setSearch] = useState(searchParams.get("q") || "");
  const { fetchByParams, getProducts } = useProducts();

  useEffect(() => {
    setSearchParams({ q: search });
    getProducts();
  }, [search]);

  const { user } = useAuth();
  console.log(user);
  return (
    <Box item md={4}>
      <Box
        elevation={1}
        sx={{
          width: "max-content",
          minWidth: "200px",
          height: "min-content",
          border: "2px solid rgb(254, 249, 239)",
          boxShadow:
            "0px 2px 4px -1px rgba(0,0,0,0.2), 0px 4px 5px 0px rgba(0,0,0,0.14), 0px 1px 10px 0px rgba(0,0,0,0.12)",
          marginTop: "7%",
        }}
      >
        <Box
          style={{
            display: "flex",
            flexDirection: "column",

            alignItems: "center",
          }}
        >
          {user.email ? (
            <img
              style={{
                borderRadius: "100%",
                height: " 100px",
                width: "100px",
                objectFit: "cover",
                marginTop: "8px",
              }}
              src="https://i.pinimg.com/564x/59/73/ff/5973ff63055dc63a35e317d4ac3b08e0.jpg"
              alt=""
            />
          ) : null}
          <FormLabel
            style={{ marginTop: "8px" }}
            id="demo-radio-buttons-group-label"
          >
            {user.email}
          </FormLabel>
        </Box>
        <TextField
          id="standard-basic"
          label="Search"
          variant="standard"
          fullWidth
          onChange={(e) => setSearch(e.target.value)}
          value={search}
        />

        <Box style={{ marginLeft: "9%", marginTop: "20px" }}>
          <FormControl>
            <FormLabel id="demo-radio-buttons-group-label">Type</FormLabel>
            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              defaultValue="all"
              name="radio-buttons-group"
              onChange={(e) => fetchByParams("type", e.target.value)}
            >
              <FormControlLabel value="all" control={<Radio />} label="all" />
              <FormControlLabel value="Sofa" control={<Radio />} label="sofa" />
              <FormControlLabel value="Bed" control={<Radio />} label="bed" />
              <FormControlLabel
                value="Armchair"
                control={<Radio />}
                label="armchair"
              />
            </RadioGroup>
          </FormControl>
        </Box>
        <Box style={{ marginLeft: "9%", marginBottom: "20px" }}>
          <FormControl>
            <FormLabel id="demo-radio-buttons-group-label">Price</FormLabel>
            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              defaultValue="all"
              name="radio-buttons-group"
              onChange={(e) => fetchByParams("price_lte", e.target.value)}
            >
              <FormControlLabel value="all" control={<Radio />} label="all" />
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
        </Box>
      </Box>
    </Box>
  );
};

export default SideBar;
