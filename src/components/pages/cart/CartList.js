import React from "react";
import { connect } from "react-redux";

import ProductCard from "../../common/ProductCard";

const CartList = (props) => {
    console.log("CartList", props.cart.cart)
    return (
        <div>
            <h3>Cart List</h3>
            {props.cart.cart.map((item) => (
                <ProductCard item={item} />
            ))}
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
      cart: state.cart
    };
  };
  
export default connect(mapStateToProps, null)(CartList);