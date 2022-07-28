import { connect } from "react-redux";
import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import { Link } from "react-router-dom";

function ProductCard(props) {
  //reduces length of title so they can be consistent
  //the string is cut off afte the last word within the lenght limit
  const maxLength = (text, length) => {
    if (text.length > length) {
      text = text.substring(0,length-1);
      const lastSpace = text.lastIndexOf(" ");
      text = text.substring(0,lastSpace) + "...";
    }
    return text;
  }
  return (
    <Card className="product-card" sx={{ maxWidth: 345}} style={{border: "none", boxShadow: "none"}}>
      <Link to={`/customer/product${props.item.id}`} style={{textDecoration: "none"}}>
        <CardActionArea>
          <div style={{display: "flex", justifyContent: "center", flexDirection: "column", alignItems: "center"}}>
          <CardMedia
            component="img"
            height="140"
            image={props.item.image}
            alt={props.item.title}
            sx={{backgroundSize: "contain", height: 200, width:"auto"}}
            />
          </div>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div" style={{color:"black"}} sx={{height: 100}} >
              {maxLength(props.item.title, 40)}
            </Typography>
            <Typography variant="body2" color="text.secondary" style={{color:"black"}} md={{height: 10}} sx={{fontWeight: 'bold', fontSize: 20}}>
              ${props.item.price}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Link>
      <CardActions>
        <Button
          onClick={() => props.button(props.item)}
          size="small"
          color="primary"
        >
          {props.buttonName}
        </Button>
      </CardActions>
    </Card>
  );
}

export default connect(null, null)(ProductCard);
