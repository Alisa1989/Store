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
      console.log("text before", text);
      const lastSpace = text.lastIndexOf(" ");
      text = text.substring(0,lastSpace) + "...";
      console.log("text after", text);

    }
    return text;
  }
  return (
    <Card class="product-card" sx={{ maxWidth: 345 }}>
      <Link to={`/${props.item.id}`} style={{textDecoration: "none"}}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image={props.item.image}
            alt={props.item.title}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div" style={{color:"black"}}>
              {maxLength(props.item.title, 50)}
            </Typography>
            {/* <Typography variant="body2" color="text.secondary" style={{color:"black"}} sx={{height: 200}} >
              {props.item.description}
            </Typography> */}
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
