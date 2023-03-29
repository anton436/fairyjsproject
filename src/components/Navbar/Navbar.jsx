import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import { Link, useNavigate } from "react-router-dom";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Modal from "@mui/material/Modal";
import logo from "./images/logo_icon.png";
import call from "./images/icon_call.png";
import instagram from "./images/instagram_icon.png";
import "./navbar.css";
import { useAuth } from "../../contexts/AuthContextProvider";
import { ADMIN } from "../../helpers/consts";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Badge } from "@mui/material";
import { useCart } from "../../contexts/CartContextProvider";
import { getCountProductsInCart } from "../../helpers/functions";

const pages = [
  { name: "Каталог кроватей", link: "/", id: 1 },
  { name: "Компания", link: "/company", id: 2 },
  { name: "Блог", link: "/products", id: 3 },
  { name: "Контакты", link: "/contacts", id: 4 },
  { name: "", link: "/*", id: 5 },
];

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 350,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

function Navbar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [city, setCity] = React.useState("");

  const {
    handleLogout,
    user: { email },
  } = useAuth();

  const navigate = useNavigate();

  const handleChange = (event) => {
    setCity(event.target.value);
  };

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [count, setCount] = React.useState(0);
  const { addProductToCart } = useCart();

  React.useEffect(() => {
    setCount(getCountProductsInCart());
  }, [addProductToCart]);

  return (
    <AppBar position="static" style={{ backgroundColor: "#fef9ef" }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters sx={{ borderRight: "1px solid #DDDDDD" }}>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            <img src={logo} alt="error" width={88} />
          </Typography>

          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "flex", md: "none" },
            }}
          >
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page, index) => (
                <Link
                  style={{ textDecoration: "none" }}
                  key={index}
                  to={page.link}
                >
                  <MenuItem onClick={handleCloseNavMenu}>
                    <Typography id="page_adapt_link" textAlign="center">
                      {page.name}
                    </Typography>
                  </MenuItem>
                </Link>
              ))}
            </Menu>
          </Box>

          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            <img
              sx={{ display: { xs: "flex", md: "none" }, mr: 1 }}
              src={logo}
              alt="error"
              width={80}
            />
          </Typography>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
              borderLeft: "1px solid #DDDDDD",
              borderRight: "1px solid #DDDDDD",
            }}
          >
            {pages.map((page, index) => (
              <Link
                style={{ textDecoration: "none" }}
                key={index}
                to={page.link}
              >
                <Button
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, display: "block" }}
                >
                  <Typography id="pages_link">{page.name}</Typography>
                </Button>
              </Link>
            ))}

            {email === ADMIN ? (
              <Button
                onClick={() => navigate("/admin")}
                sx={{ my: 2, display: "block" }}
              >
                <Typography id="pages_link">Admin page</Typography>
              </Button>
            ) : null}

            {email ? (
              <Button onClick={handleLogout} sx={{ my: 2, display: "block" }}>
                <Typography id="pages_link">Logout</Typography>
              </Button>
            ) : (
              <Button
                onClick={() => navigate("/auth")}
                sx={{ my: 2, display: "block" }}
              >
                <Typography id="pages_link">Login</Typography>
              </Button>
            )}

            <IconButton onClick={() => navigate("/cart")}>
              <Badge badgeContent={count} color="primary">
                <ShoppingCartIcon />
              </Badge>
            </IconButton>
          </Box>
          <Button
            className="btn_contact"
            style={{ color: "black", border: "none" }}
            onClick={handleOpen}
          >
            <img
              src={call}
              alt="error"
              style={{ width: "20px", marginRight: "10px" }}
            />
            Связаться
          </Button>
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box
              sx={style}
              style={{ display: "flex", backgroundColor: "#fef9ef" }}
            >
              <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                <h3>Связаться с нами</h3>
                WhatsUp: 05489065786
                <br />
                Telegram: 05489065786
                <br />
                Почта : fdjghudh@cvhbjck
              </Typography>
            </Box>
          </Modal>

          <Link to="https://instagram.com/makerskg?igshid=YmMyMTA2M2Y=">
            <IconButton>
              <img width={20} src={instagram} alt="error" />
            </IconButton>
          </Link>

          <Box>
            <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
              <InputLabel id="demo-select-small">City</InputLabel>
              <Select
                labelId="demo-select-small"
                id="demo-select-small"
                value={city}
                label="City"
                onChange={handleChange}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={1}>Bishkek</MenuItem>
                <MenuItem value={2}>Osh</MenuItem>
                <MenuItem value={3}>Naryn</MenuItem>
              </Select>
            </FormControl>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Navbar;
