import React from "react";
import { useEffect } from "react";
import { getProducts } from "../../../state/actions/productsActions";
import { connect } from "react-redux";
import ProductList from './ProductList'

const LandingPage = (props) => {
  useEffect(() => {
    props.getProducts();
  }, );
  
  return (
    <section className='landing-page'>
        <ProductList />
    </section>
  );
};

const mapStateToProps = (state) => {
  return {
    stores: state,
    isFetching: state.products.isFetching,
    listings: state.products,
    cart: state.cart
  };
};

const mapDispatchToProps = {
  getProducts,
};

export default connect(mapStateToProps, mapDispatchToProps)(LandingPage);
