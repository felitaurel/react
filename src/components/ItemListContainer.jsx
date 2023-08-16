
import Typography from '@mui/material/Typography';
import React, { useEffect, useState } from 'react'
import ActionAreaCard from './ItemCard';
import ItemList from './ItemList';
import { Box, Container, Grid } from '@mui/material';
import { useParams } from 'react-router-dom';
import { getData, getCategoryData } from './firebase';


function ItemListContainer() {


  const [products, setProducts] = useState([]);
  const {categoryId} = useParams()
  async function requestProducts() {
    let respuesta = []
    if (categoryId === undefined) {respuesta = await getData();}
    else {respuesta = await getCategoryData(categoryId)}
    setProducts(respuesta);
    
  }

  useEffect(() => {
    requestProducts();
  }, [categoryId]); //el cambio mas importante para hacer el routing y que muestre una categoria especifica, es hacer que sea [categoryId]

{/*console.log(products)*/}
  
  return (
    <Container>
      <ItemList products={products} sx={{  display: 'flex', flexDirection: 'column', flexGrow: 1, alignItems: 'stretch'}}/>
    </Container>
  )
}

export default ItemListContainer

