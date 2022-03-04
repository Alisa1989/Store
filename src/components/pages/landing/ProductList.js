import * as React from "react";
import { experimentalStyled as styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { connect } from "react-redux";
import ProductCard from "../../common/ProductCard";
import { addProduct } from "../../../state/actions/cartActions";
import { Link } from "react-router-dom";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

function ProductList(props) {
  if (props.products.isFetching) 
  {
    return "Loading..."
  };

  if (props.products.error) 
  {
    return "Oops... Something went wrong."
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 2, sm: 8, md: 18 }}
      >
        {(props.products.filteredItems.length
          ? props.products.filteredItems
          : props.products.products
        ).map((_, index) => (
          <Grid item xs={2} sm={4} md={4} key={index} >
              <Item style={{backgroundColor: 'azure'}} >
                <ProductCard
                  item={_}
                  key={_.id}
                  button={props.addProduct}
                  buttonName="add to cart"
                />
              </Item>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

const mapStateToProps = (state) => {
  return {
    isFetching: state.isFetching,
    products: state.products,
    filteredItems: state.filteredItems,
  };
};

const mapDispatchToProps = {
  addProduct,
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductList);
