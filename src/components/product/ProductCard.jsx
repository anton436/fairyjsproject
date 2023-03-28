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
import { useAuth } from "../../contexts/AuthContextProvider";
import { ADMIN } from "../../helpers/consts";
<style>
  @import
  url('https://fonts.googleapis.com/css2?family=Montserrat:wght@500;600&family=Open+Sans:wght@300&display=swap');
</style>;

export default function ProductCard({ item }) {
  const navigate = useNavigate();
  const { deleteProduct } = useProducts();
  const {
    user: { email },
  } = useAuth();

  return (
    <Card
      sx={{
        maxWidth: 1100,
        display: "flex",
        flexDirection: "row",
        margin: "1rem",
      }}
    >
      <CardMedia
        sx={{
          height: 320,
          width: "27%",
          padding: "20px",
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
              fontFamily: "Montserrat",
            }}
          >
            {item.name}
          </Typography>
          <Typography
            variant="body2"
            sx={{
              fontSize: "18px",
              marginTop: "30px",
              marginLeft: "30px",
              fontFamily: "Open Sans",
              lineHeight: "27px",
            }}
          >
            {item.description}
          </Typography>
          <Typography
            variant="body5"
            sx={{
              fontSize: "24px",
              color: "#000000",
              marginLeft: "30px",
              color: "#006c73",
            }}
          >
            {item.price} $
          </Typography>
        </Box>
        <CardActions sx={{ height: "50px" }}>
          {email === ADMIN ? (
            <>
              <Button
                sx={{
                  width: "20%",
                  height: "40px",
                  backgroundColor: "#006c73",
                  color: "#b7b7a4",
                  marginLeft: "25px",
                }}
                onClick={() => navigate(`/details/${item.id}`)}
                size="small, "
              >
                Details
              </Button>
              <Button
                sx={{
                  width: "20%",
                  height: "40px",
                  backgroundColor: "#006c73",
                  color: "#b7b7a4",
                }}
                onClick={() => navigate(`/edit/${item.id}`)}
                size="small"
              >
                Edit
              </Button>
            </>
          ) : null}
        </CardActions>
      </CardContent>
    </Card>
  );
}
