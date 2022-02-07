import { connect } from "react-redux";
import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';

function ProductCard(props) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={props.item.image}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {props.item.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {props.item.description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button onClick= {()=> props.button(props.item)}size="small" color="primary">
          {props.buttonName}
        </Button>
      </CardActions>
    </Card>
  );
}

export default connect(null,null)(ProductCard);