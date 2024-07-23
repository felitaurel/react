import React from 'react'
import { useState, useEffect, useContext } from "react";
import { getProductData } from "./firebase.js";
import { useParams } from "react-router-dom";
import { cartContext } from './cartContext.jsx';
import ItemCount from './ItemCount.jsx';
import { Link } from 'react-router-dom';
import { Grid } from '@mui/material';
//Tiene que tener la misma logica que item list, mostrar el objeto pero no importa de donde vengan las props
/*
function ItemDetail(props) {
  
  const { addToCart, getItemInCart } = useContext(cartContext);
  const {id, nombre, descripcion, img, precio, category, stock} = props;
  const itemInCart = getItemInCart(id)
  console.log(id)
  const [isAddedToCart, setIsAddedToCart] = useState(false);
  const maxItems = itemInCart
    ? stock - itemInCart.count
    : stock;
  
  function handleAddToCart(clickCount) {
    addToCart(props, clickCount);
    alert(`${nombre} agregado al carrito, cantidad: ${clickCount}`);
    setIsAddedToCart(true);
  }
  return(
    <Grid container sx={{my: 5}}>

    <Grid item md={6}>
    <img width= "100%" height="auto" src={img} alt="imagen" style={{ boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)"}}></img>
    </Grid>
    <Grid item md={1}></Grid>
    <Grid item md={5} sx={{"background-color": "#2381d9", "height": "60vh"}}>
      <h2 style={{ color: "white" }}>{nombre}</h2>
    
    
      <h4 style={{ color: "white" }}>$ {precio}</h4>
      <small style = {{color: 'white'}}>{descripcion}</small>
      
    
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
    )}
    </Grid>
    </Grid>
  )
}

export default ItemDetail


*/

import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { Grid, Button } from '@mui/material';
import { cartContext } from './cartContext.jsx';
import ItemCount from './ItemCount.jsx';

function ItemDetail(props) {
    const { addToCart, getItemInCart } = useContext(cartContext);
    const { id, nombre, descripcion, img, precio, category, stock } = props;
    const itemInCart = getItemInCart(id);
    const [isAddedToCart, setIsAddedToCart] = useState(false);
    //const [selectedSize, setSelectedSize] = useState(null);
    const maxItems = itemInCart ? stock - itemInCart.count : stock;

    function handleAddToCart(clickCount) {
        addToCart({ ...props, selectedSize }, clickCount);
        alert(`${nombre} agregado al carrito, cantidad: ${clickCount}`);
        setIsAddedToCart(true);
    }

    return (
        <Grid container sx={{ my: 5 }}>
            <Grid item md={6}>
                <img width="100%" height="auto" src={img} alt="imagen" style={{ boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)" }}></img>
            </Grid>
            <Grid item md={1}></Grid>
            <Grid item md={5} sx={{ "background-color": "#2381d9", "height": "60vh" }}>
                <h2 style={{ color: "white" }}>{nombre}</h2>
                <h4 style={{ color: "white" }}>$ {precio}</h4>
                <small style={{ color: 'white' }}>{descripcion}</small>
{/*
                <div>
                    <h3 style={{ color: "white" }}>Seleccionar Talle:</h3>
                    <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
                        {possibleSizes.map((size) => {
                            const isAvailable = availableSizes.includes(size);
                            return (
                                <Button
                                    key={size}
                                    variant={selectedSize === size ? "contained" : "outlined"}
                                    color="primary"
                                    onClick={() => isAvailable && setSelectedSize(size)}
                                    disabled={!isAvailable}
                                    style={{
                                        color: isAvailable ? (selectedSize === size ? '#ffffff' : '#2381d9') : '#999999',
                                        backgroundColor: selectedSize === size ? '#2381d9' : '#ffffff',
                                        textDecoration: isAvailable ? 'none' : 'line-through'
                                    }}
                                >
                                    {size}
                                </Button>
                            );
                        })}
                    </div>
                </div>*/}

                {itemInCart && (
                    <h2>Ya agregaste {itemInCart.count} unidades de este producto</h2>
                )}
                {stock > 0 ? (
                    isAddedToCart ? (
                        <Link to="/cart" style={{ color: '#000000' }}>Ir al carrito</Link>
                    ) : (
                        selectedSize ? (
                            <ItemCount stock={maxItems} onConfirm={handleAddToCart} />
                        ) : (
                            <p style={{ color: 'white' }}>Selecciona un talle para continuar</p>
                        )
                    )
                ) : (
                    <p>No hay stock disponible</p>
                )}
            </Grid>
        </Grid>
    );
}

export default ItemDetail;
