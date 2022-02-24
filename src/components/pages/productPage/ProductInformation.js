import React from "react";

const ProductInformation = ({item}) => {
  return (
    <>
      <img src={item.image} />
      <h1>{item.title}</h1>
      <p>Price: {item.price}</p>
      <p>About this Item:</p>
      <p>{item.description}</p>
    </>
  );
};

export default ProductInformation;
