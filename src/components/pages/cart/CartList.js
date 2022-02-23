import React from "react";
import { connect } from "react-redux";

import ProductCard from "../../common/ProductCard";
import {removeProduct} from '../../../state/actions/cartActions'

const CartList = (props) => {
    return (
        <div>
            <h3>Cart List</h3>
            <p>
                Total Price: {props.cart.cart.total}
            </p>
            {props.cart.cart.items.map((item) => (
                <ProductCard item={item} key={item.id} button={props.removeProduct} buttonName="delete"/>
            ))}
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
      cart: state.cart
    };
  };

const mapDispatchToProps = {
removeProduct
};
  
  
export default connect(mapStateToProps, mapDispatchToProps)(CartList);