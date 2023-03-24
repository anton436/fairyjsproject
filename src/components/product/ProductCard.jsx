import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useProducts } from "../../contexts/ProductContextProvider";
import { useNavigate } from "react-router-dom";
import { Box } from "@mui/system";

export default function ProductCard({ item }) {
  const navigate = useNavigate();
  const { deleteProduct } = useProducts();
  return (
    <Card
      sx={{
        margin: "1rem",
        display: "flex",
        width: "92%",
      }}
    >
      <CardMedia
        sx={{
          height: 320,
          width: "44%",
          objectFit: "cover",
        }}
        image={item.picture}
        title="green iguana"
      />

      <CardContent
        style={{
          display: "flex",
          flexDirection: "column",
          width: "56%",
          flexWrap: "wrap",
        }}
      >
        <Box sx={{ height: "14rem", width: "100%" }}>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            sx={{
              fontFamily: "sans-serif",
              fontSize: "36px",
              marginLeft: "30px",
            }}
          >
            {item.name}
          </Typography>
          <Typography
            variant="body2"
            sx={{ fontSize: "18px", marginTop: "30px", marginLeft: "30px" }}
          >
            {item.description}
          </Typography>
          <Typography
            variant="body2"
            sx={{
              fontSize: "24px",
              color: "#000000",
              marginTop: "35px",
              marginLeft: "30px",
            }}
          >
            {item.price} $
          </Typography>
        </Box>
        <CardActions sx={{ height: "50px" }}>
          <Button
            sx={{
              width: "20%",
              height: "40px",
              backgroundColor: "#006c73",
              color: "ffffff",
              marginLeft: "25px",
            }}
            onClick={() => deleteProduct(item.id)}
            size="small, "
          >
            Delete
          </Button>
          <Button
            sx={{
              width: "20%",
              height: "40px",
              backgroundColor: "#006c73",
              color: "ffffff",
            }}
            onClick={() => navigate(`/edit/${item.id}`)}
            size="small"
          >
            Edit
          </Button>
        </CardActions>
      </CardContent>
    </Card>
  );
}
