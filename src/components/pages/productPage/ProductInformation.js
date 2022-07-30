import React from "react";
import { serverURL } from "../../../constants";

const ProductInformation = ({item}) => {
  return (
    <div className="product-information">
      <img src={`${serverURL}${item.image}`} alt={item.title}/>
      <div className="product-text">
      <h1>{item.title}</h1>
      <p>Price: {item.price}</p>
      <p>About this Item:</p>
      <p>{item.description}</p>
        </div>
    </div>
  );
};

export default ProductInformation;
