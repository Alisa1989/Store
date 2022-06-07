import React from "react";

const ProductInformation = ({item}) => {
  return (
    <div className="product-information">
      <img src={item.image} alt={item.title}/>
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
