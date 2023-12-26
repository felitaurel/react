import React from "react";
import { useContext } from "react";
import { cartContext } from "./cartContext";
import { createOrder } from "./firebase";
import { Link, useNavigate } from "react-router-dom";
import ItemCount from "./ItemCount";
import {Grid} from "@mui/material";

function CartContainer() {
  const { cart, removeItem } = useContext(cartContext);
  console.log(cart)
  var total = 0;
  return (
    <div>
      
      <h1>Tus items:</h1>
      {cart.map((item) => (
        
        <Grid container  key={item.id} style={{backgroundColor: '#5b76b5', border: "1px solid #000", height: '10vh', display:'flex', flexWrap: 'wrap', margin: '0', padding: '0'}}>

          <Grid item xs={2}><img src={item.img} alt={item.nombre} style={{width: '100%', height: '10vh', objectFit: 'cover', display: 'block', maxHeight: '100%'}}/> </Grid>
          <Grid item xs={3}>{item.nombre}</Grid>
          <Grid item xs={2} style={{ display: 'none' }}>{total = total + item.precio * item.count}</Grid>
          <Grid item xs={2}>Precio unitario: ${item.precio}</Grid>
          <Grid item xs={2}>Cantidad a comprar: {item.count}</Grid>
          <Grid item xs={2}>Precio total ${item.count * item.precio}</Grid>
          
          <button onClick={() => removeItem(item.id)}>Eliminiar</button>
        </Grid>
      ))}
      <Grid container>
        <Grid item xs={12}><div>Total de la compra: {total}</div>
        <Link to="/checkout">Comprar</Link>
        </Grid>
      </Grid>
    </div>
  );
}

export default CartContainer;