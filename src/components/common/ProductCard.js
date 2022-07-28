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
            <Typography gutterBottom variant="h5" component="div" style={{color:"black", overflow: "hidden"}} sx={{height: 100}} >
              {props.item.title}
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
