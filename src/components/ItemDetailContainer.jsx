import React from 'react'
import { useState, useEffect,useContext } from "react";
import { getProductData } from "./firebase.js";
import { useParams } from "react-router-dom";
import ItemDetail from './ItemDetail'
import { cartContext } from './cartContext.jsx';
import ItemCount from './ItemCount.jsx';
import { Link } from 'react-router-dom';

function ItemDetailContainer() {


  const [product, setProduct] = useState({});
  const { id } = useParams();

  
  
  

  
  useEffect(() => {
    async function requestProduct() {
      const respuesta = await getProductData(id);
      setProduct(respuesta);
    }

    requestProduct();
  }, [id]);
  return (
    <ItemDetail Key = {product.id} {...product} />
      
    
  );
}

export default ItemDetailContainer