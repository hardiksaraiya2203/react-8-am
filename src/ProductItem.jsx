import React from "react";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const ProductItem = (props) => { 
  return (
    <div>
      {
        <Card sx={{ width: 345 }}>
         <CardMedia
        sx={{ height: 140 }}
        image={props.item.image}
        title="green iguana"
      />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          {props.item.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {props.item.description}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" >Add to Cart</Button>
          
        </CardActions>
      </Card>
      }
    </div>
  );
};

export default ProductItem;
