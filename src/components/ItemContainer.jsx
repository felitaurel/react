
import Typography from '@mui/material/Typography';
import React, { useEffect, useState } from 'react'
import GetData from './GetData';
import ActionAreaCard from './ItemCard';


function ItemContainer() {


  const [products, setProducts] = useState([]);

  async function requestProducts() {
    const respuesta = await GetData();
    setProducts(respuesta);
    
  }

  useEffect(() => {
    console.log("Montaje ILC");
    requestProducts();
  }, []);

{/*console.log(products)*/}
  console.log("uno")
  return (
    <div>
      {console.log("dos")}
      Listado de Productos
      <div>
        {products.map((item) => { 
          ActionAreaCard({...item})
          console.log(item.nombre)
          
        })}
      </div>
    </div>
  )
}

export default ItemContainer