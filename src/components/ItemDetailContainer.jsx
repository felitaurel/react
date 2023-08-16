import React from 'react'
import { useState, useEffect } from "react";
import { getProductData } from "./firebase.js";
import { useParams } from "react-router-dom";
import ItemDetail from './ItemDetail'
//Tiene que tener la misma logica q item listcontainer, conseguir los datos del producto y no mostarlo
function ItemDetailContainer() {


  const [product, setProduct] = useState({});
  const { id } = useParams();
  
  //const parametros = useParams();
  //const id = parametros.id

  async function requestProduct() {
    const respuesta = await getProductData(id);
    setProduct(respuesta);
  }

  useEffect(() => {
    requestProduct();
  }, []);

  // return <ItemDetail product={product} />;
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
    </div>
  );
}

export default ItemDetailContainer