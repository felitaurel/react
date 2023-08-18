import React from 'react'
import { useState, useEffect, useContext } from "react";
import { getProductData } from "./firebase.js";
import { useParams } from "react-router-dom";
import { cartContext } from './cartContext.jsx';
import ItemCount from './ItemCount.jsx';
import { Link } from 'react-router-dom';
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
  
  function handleAddToCart(clickCount) {
    addToCart(props, clickCount);
    alert(`${nombre} agregado al carrito, cantidad: ${clickCount}`);
    setIsAddedToCart(true);
  }
  return(
    <div>
    <div>
    <img width={300} src={img} alt="imagen"></img>
    </div>
    <div>
      <h2>{nombre}</h2>
    </div>
    <div>
      <h4>$ {precio}</h4>
      <small style = {{color: 'white'}}>{descripcion}</small>
      </div>
    {stock > 0 ? (
      isAddedToCart ? (
        <Link to="/cart">Ir al carrito</Link>
      ) : (
        <ItemCount stock={maxItems} onConfirm={handleAddToCart} />
      )
    ) : (
      <p>No hay stock disponible</p>
    )}
    {itemInCart && (
      <h2>Ya agregaste {itemInCart.count} unidades de este producto</h2>
    )}
    
  </div>
  )
}

export default ItemDetail


/*<div>
<img width={600} src={imagen} alt="imagen"></img>
</div>
<div>
  <h2>{nombre}</h2>
</div>
<div>
  <h4>$ {precio}</h4>
  <small>{descripcion}</small>
</div>*/