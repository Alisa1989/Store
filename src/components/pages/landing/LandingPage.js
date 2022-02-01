import React from "react";
import { useEffect } from "react";
import { getProducts } from "../../../state/actions/productsActions";
import { connect } from "react-redux";
import ProductList from './ProductList'

const LandingPage = (props) => {
  useEffect(() => {
    props.getProducts();
  }, [getProducts]);
  console.log("props", props)
  console.log("fetching?", props.isFetching);
  console.log("products", props.products);
  return (
    <>
        <ProductList />
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    isFetching: state.isFetching,
    products: state.products,
  };
};

const mapDispatchToProps = {
  getProducts,
};

export default connect(mapStateToProps, mapDispatchToProps)(LandingPage);
