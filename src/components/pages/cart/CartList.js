import React from "react";
import { connect } from "react-redux";

import ProductCard from "../../common/ProductCard";
import {removeProduct} from '../../../state/actions/cartActions'
import { getCart } from "../../../state/actions/cartActions";

import { experimentalStyled as styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";

const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));


const CartList = (props) => {
    if (!sessionStorage.getItem("token")) {
      return <p>Must login first</p>
    }
    if (props.cart.cart.items.length === 0) {
      return <p>Go to the store to add something to the cart</p>
    }

    return (
        <>
        <div>
            <h3>Cart List</h3>
            <p>
                Total Price: {props.cart.cart.total}
            </p>
        </div>

        <Box sx={{ flexGrow: 1 }}>
          <Grid
            container
            spacing={{ xs: 2, md: 3 }}
            columns={{ xs: 2, sm: 8, md: 18 }}
            alignItems="center"
            justifyContent="center"
          >
            {props.cart.cart.items.map((item) => (
              <Grid item xs={2} sm={4} md={4} key={item.id} >
                  <Item style={{backgroundColor: 'azure'}} >
                  <ProductCard item={item} key={item.id} button={props.removeProduct} buttonName="delete"/>
                  </Item>
              </Grid>
            ))}
          </Grid>
        </Box>
        </>
      );
    }


const mapStateToProps = (state) => {
    return {
      cart: state.cart,
      customer: state.customer,
      product: state.product
    };
  };

const mapDispatchToProps = {
  removeProduct,
  getCart
};
  
  
export default connect(mapStateToProps, mapDispatchToProps)(CartList);