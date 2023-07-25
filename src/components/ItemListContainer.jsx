
import Typography from '@mui/material/Typography';
import React, { useEffect, useState } from 'react'
import GetData, { getCategoryData }  from './GetData';
import ActionAreaCard from './ItemCard';
import ItemList from './ItemList';
import { Box, Container, Grid } from '@mui/material';
import { useParams } from 'react-router-dom';


function ItemListContainer() {


  const [products, setProducts] = useState([]);
  const {categoryId} = useParams()
  async function requestProducts() {
    let respuesta = []
    if (categoryId === undefined) {respuesta = await GetData();}
    else {respuesta = await getCategoryData(categoryId)}
    setProducts(respuesta);
    
  }

  useEffect(() => {
    requestProducts();
  }, [categoryId]); //el cambio mas importante para hacer el routing y que muestre una categoria especifica, es hacer que sea [categoryId]

{/*console.log(products)*/}
  console.log("uno")
  return (
    <Container>
      <ItemList products={products} />
    </Container>
  )
}

export default ItemListContainer