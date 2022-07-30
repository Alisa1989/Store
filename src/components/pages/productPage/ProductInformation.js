import React from "react";
import { serverURL } from "../../../constants";

const ProductInformation = ({ item }) => {
  return (
    <div
      className="product-information"
      style={{
        width: "auto",
        margin: "auto",
        position: "relative",
        top: "100px",
        display: "flex",
        justifyContent: "space-evenly"
      }}
    >
      <img
        src={`${serverURL}${item.image}`}
        alt={item.title}
        style={{
          display: "block",
          objectFit: "contain",
          width: "400px",
          height: "auto",
        }}
      />
      <div className="product-text" style={{maxWidth: "30%"}}>
        <h1>{item.title}</h1>
        <p>Price: {item.price}</p>
        <p>About this Item:</p>
        <p>{item.description}</p>
      </div>
    </div>
  );
};

export default ProductInformation;
