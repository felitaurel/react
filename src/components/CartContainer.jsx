import React from "react";
import { useContext } from "react";
import { cartContext } from "./cartContext";
import { createOrder } from "./firebase";
import { Link, useNavigate } from "react-router-dom";
import ItemCount from "./ItemCount";

function CartContainer() {
  const { cart, removeItem } = useContext(cartContext);
  console.log(cart)
  var total = 0;
  return (
    <div>
      
      <h1>Tus items:</h1>
      {cart.map((item) => (
        
        <div key={item.id}>
          {console.log(item.id)}
          <h2>{item.nombre}</h2>
          <p>Precio unitario: ${item.precio}</p>
          <p>Cantidad a comprar: {item.count}</p>
          <p>Precio total ${item.count * item.precio}</p>
          
          <button onClick={() => removeItem(item.id)}>Eliminiar</button>
        </div>
      ))}

      <div>Total de la compra: {total}</div>
      <Link to="/checkout">Comprar</Link>
    </div>
  );
}

export default CartContainer;