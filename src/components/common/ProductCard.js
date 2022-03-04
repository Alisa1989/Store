import { connect } from "react-redux";
import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import { Link } from "react-router-dom";

function ProductCard(props) {
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
              {props.item.title}
            </Typography>
            <Typography variant="body2" color="text.secondary" style={{color:"black"}} sx={{height: 200}} >
              {props.item.description}
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
