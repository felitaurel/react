import React from 'react'
import { useState, useEffect } from "react";
import { getProductData } from "./GetData.jsx";
import { useParams } from "react-router-dom";
//Tiene que tener la misma logica que item list, mostrar el objeto pero no importa de donde vengan las props
function ItemDetail(props) {
  const {id, nombre, descripcion, imagen, precio, category} = props;
  return(
  <div>
   descripcion: {descripcion}   
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