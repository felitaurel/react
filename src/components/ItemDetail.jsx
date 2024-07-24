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
  const { id, nombre, descripcion, img, precio, stock } = props;
  const itemInCart = getItemInCart(id);
  const [isAddedToCart, setIsAddedToCart] = useState(false);
  const maxItems = itemInCart ? stock - itemInCart.count : stock;

  const tallesPosibles = [36, 37, 38, 39, 40, 41, 42, 43, 44];

  function handleAddToCart(clickCount) {
    addToCart(props, clickCount);
    alert(`${nombre} agregado al carrito, cantidad: ${clickCount}`);
    setIsAddedToCart(true);
  }

  return (
    <Grid container sx={{ my: 5 }}>
      <Grid item md={6} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <img
          width="70%"
          height="auto"
          src={img}
          alt="imagen"
          style={{ boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}
        />
      </Grid>
      <Grid item md={1}></Grid>
      <Grid item md={5} sx={{ backgroundColor: '#2381d9', height: '60vh', padding: '20px', borderRadius: '10px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
        <h2 style={{ color: 'white' }}>{nombre}</h2>
        <h4 style={{ color: 'white' }}>$ {precio}</h4>
        <small style={{ color: 'white', marginBottom: '20px' }}>{descripcion}</small>
        
        <div style={{ textAlign: 'center' }}>
          <h3 style={{ color: 'white' }}>Seleccionar Talle</h3>
          <div style={{ display: 'flex', flexWrap: 'wrap', maxWidth: '300px', justifyContent: 'center' }}>
            {tallesPosibles.map((size) => (
              <button
                key={size}
                onClick={() => handleAddToCart(size)}
                style={{
                  width: '50px',
                  height: '50px',
                  margin: '5px',
                  backgroundColor: '#007BFF',
                  color: 'white',
                  border: '1px solid #000',
                  borderRadius: '5px',
                  cursor: 'pointer',
                }}
              >
                {size}
              </button>
            ))}
          </div>
        </div>
        
        <div style={{ marginTop: '20px', textAlign: 'center' }}>
          {itemInCart && <h2 style={{ color: 'white' }}>Ya agregaste {itemInCart.count} unidades de este producto</h2>}
          {stock > 0 ? (
            isAddedToCart ? (
              <Link to="/cart" style={{ color: '#000' }}>Ir al carrito</Link>
            ) : (
              <ItemCount stock={maxItems} onConfirm={handleAddToCart} />
            )
          ) : (
            <p style={{ color: 'white' }}>No hay stock disponible</p>
          )}
        </div>
      </Grid>
    </Grid>
  );
}


export default ItemDetail


