import React from 'react'
import { useState, useEffect, useContext } from "react";
import { getProductData } from "./firebase.js";
import { useParams } from "react-router-dom";
import { cartContext } from './cartContext.jsx';
import ItemCount from './ItemCount.jsx';
import { Link } from 'react-router-dom';
import { Grid } from '@mui/material';
//Tiene que tener la misma logica que item list, mostrar el objeto pero no importa de donde vengan las props

function ItemDetail(props) {
  
  const { addToCart, getItemInCart } = useContext(cartContext);
  const {id, nombre, descripcion, img, precio, category, stock} = props;
  const itemInCart = getItemInCart(id)
  console.log(id)
  const [isAddedToCart, setIsAddedToCart] = useState(false);
  const maxItems = itemInCart
    ? stock - itemInCart.count
    : stock;
  
  const tallesPosibles = [36,37,38,39,40,41,42,43,44]

  function handleAddToCart(clickCount) {
    addToCart(props, clickCount);
    alert(`${nombre} agregado al carrito, cantidad: ${clickCount}`);
    setIsAddedToCart(true);
  }
  return(
    <Grid container sx={{my: 5}}>

    <Grid item md={6}>
    <img width= "70%" height="auto" src={img} alt="imagen" style={{ boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)"}}></img>
    </Grid>
    <Grid item md={1}></Grid>
    <Grid item md={5} sx={{"background-color": "#2381d9", "height": "60vh"}}>
      <h2 style={{ color: "white" }}>{nombre}</h2>
    
    
      <h4 style={{ color: "white" }}>$ {precio}</h4>
      <small style = {{color: 'white'}}>{descripcion}</small>
      
      <div>
      <h3>Seleccionar Talle</h3>
      <div style={{ display: 'flex', flexWrap: 'wrap', maxWidth: '200px' }}>
        {tallesPosibles.map((size) => (
          <button
            key={size.size}/*
            onClick={() => handleSizeClick(size)}
            disabled={!size.available}*/
            style={{
              width: '50px',
              height: '50px',
              margin: '5px',/*
              backgroundColor: size.size === selectedSize ? 'blue' : 'white',
              color: size.available ? 'black' : 'gray',
              border: size.available ? '1px solid black' : '1px solid gray',
              textDecoration: size.available ? 'none' : 'line-through',*/
              backgroundColor: 'blue',
              color: 'black',
              border: '1px solid black'
            }}
          >
            {size.size}
          </button>
        ))}
      </div>
        </div>
    <div>
    {itemInCart && (
      <h2>Ya agregaste {itemInCart.count} unidades de este producto</h2>
    )}
    {stock > 0 ? (
      isAddedToCart ? (
        <Link to="/cart" style={{color: '#000000'}}>Ir al carrito</Link> //cambiarle el color al link porque no se ve sobre el celeste
      ) : (
        <ItemCount stock={maxItems} onConfirm={handleAddToCart} />
      )
    ) : (
      <p>No hay stock disponible</p>
    )}</div>
    </Grid>
    </Grid>
  )
}

export default ItemDetail


