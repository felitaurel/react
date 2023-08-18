import React from 'react'
import { useState, useEffect,useContext } from "react";
import { getProductData } from "./firebase.js";
import { useParams } from "react-router-dom";
import ItemDetail from './ItemDetail'
import { cartContext } from './cartContext.jsx';
import ItemCount from './ItemCount.jsx';
import { Link } from 'react-router-dom';

//Tiene que tener la misma logica q item listcontainer, conseguir los datos del producto y no mostarlo
function ItemDetailContainer() {


  const [product, setProduct] = useState({});
  const [isAddedToCart, setIsAddedToCart] = useState(false);
  const { id } = useParams();
  
  //const parametros = useParams();
  //const id = parametros.id
  const { addToCart, getItemInCart } = useContext(cartContext);
  
  const itemInCart = getItemInCart(id)

  const maxItems = itemInCart
    ? product.stock - itemInCart.count
    : product.stock;
  
  function handleAddToCart(clickCount) {
    addToCart(product, clickCount);
    alert(`${product.nombre} agregado al carrito, cantidad: ${clickCount}`);
    setIsAddedToCart(true);
  }
  useEffect(() => {
    async function requestProduct() {
      const respuesta = await getProductData(id);
      setProduct(respuesta);
    }

    requestProduct();
  }, [id]);
  // return <ItemDetail product={product} />;
  console.log(id)
  return (
    <div>
      <div>
      <img width={300} src={product.img} alt="imagen"></img>
      </div>
      <div>
        <h2>{product.nombre}</h2>
      </div>
      <div>
        <h4>$ {product.precio}</h4>
        <small style = {{color: 'white'}}>{product.descripcion}</small>
        </div>
      {product.stock > 0 ? (
        /* Si tenemos STOCK */
        isAddedToCart ? (
          <Link to="/cart">Ir al carrito</Link>
        ) : (
          <ItemCount stock={maxItems} onConfirm={handleAddToCart} />
        )
      ) : (
        // END si tenemos stock
        <p>No hay stock disponible</p>
      )}
      {itemInCart && (
        <h2>Ya agregaste {itemInCart.count} unidades de este producto</h2>
      )}
      <Link to="/">
        <button>Volver al inicio</button>
      </Link>
    </div>
      
    
  );
}

export default ItemDetailContainer