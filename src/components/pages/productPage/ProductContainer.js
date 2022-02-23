import React from 'react';
import ProductInformation from './ProductInformation';
import { useParams } from 'react-router-dom';
import { connect } from 'react-redux';

const ProductContainer = (props) => {
    const paramsId = useParams();
    const selectedProduct = props.products.products.find(item => Number(paramsId.id) === item.id);

    return (
        <>
        ProductContainer
        <ProductInformation item={selectedProduct}/>
        </>
    )
}
const mapStateToProps = (state) => {
    return {
      products: state.products
    };
  };
  
 
export default connect(mapStateToProps, null)(ProductContainer);