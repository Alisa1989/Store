import * as React from "react";
import { Outlet } from "react-router-dom";

import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { useState, useEffect } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { filterProducts } from "../../state/actions/productsActions";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

//The CartIcon is changed when something gets added to the cart
function Header(props) {
  const [cartIcon, setCartIcon] = useState(false);

  useEffect(() => {
    setCartIcon(true);
    setTimeout(() => {
      setCartIcon(false);
    }, 2000);
  }, [props.cart]);

  const renderCartButton = () => {
    if (cartIcon) {
      return <AddShoppingCartIcon />;
    } else {
      return <ShoppingCartIcon />;
    }
  };

  //filtering products
  const filterFunction = (event) => {
    props.filterProducts(event.target.value);
  };

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
            onClick={handleClick}
          >
            <MenuIcon
              id="basic-button"
              aria-controls={open ? "basic-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
            ></MenuIcon>
            <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                "aria-labelledby": "basic-button",
              }}
            >
              <MenuItem onClick={handleClose} component="a" href="/customer/cart">Cart</MenuItem>
              <MenuItem onClick={handleClose} component="a" href="/customer/customerLogin/login">Login</MenuItem>
              <MenuItem onClick={handleClose} component="a" href="../seller">Seller Dashboard</MenuItem>
              <MenuItem onClick={handleClose}>Logout</MenuItem>
            </Menu>
          </IconButton>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
          >
            <Link className="header-links" to={`/customer`}>
              Store64
            </Link>
          </Typography>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
          >
            <Link className="header-links" to={`/customer/customerLogin/login`}>
              Login or Sign Up
            </Link>
          </Typography>
          <Link className="header-links link-to-cart" to="/customer/cart">
            Go to Cart
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="open drawer"
              sx={{ mr: 2 }}
            >
              {renderCartButton()}
            </IconButton>
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ display: { xs: "none", sm: "block" } }}
            >
              {props.cart.cart.items.length}
            </Typography>
          </Link>
          <Link className="header-links" to={`/customer`}>
            <Search onChange={filterFunction}>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Search…"
                inputProps={{ "aria-label": "search" }}
              />
            </Search>
          </Link>
        </Toolbar>
      </AppBar>
    </Box>
  <Outlet />
  </>
  );
}

const mapStateToProps = (state) => {
  return {
    cart: state.cart,
    products: state.products,
  };
};

const mapDispatchToProps = {
  filterProducts,
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
