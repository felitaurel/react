import React from 'react'
import ActionAreaCard from './ItemCard'
import { Grid } from '@mui/material'

function ItemList(props) {
  const items = props.products.map(item =>
    <ActionAreaCard Key={item.id} {...item}/>)/* {props.products.map((item) => (
        
        
      //probablemente el problema del display es aca, que estoy haciendo un loop y mostrando un solo componente a la vez, deberia quizas usar un grid donde cargue todos los componentes y mostrarlos juntos 
        <ActionAreaCard Key={item.id} {...item}></ActionAreaCard>
      
    )
  )}
 */
  return (
      
    
    
    
     
    <Grid container justifyItems="center">
       {props.products.map((item) => (
        
        <Grid item xs={4}>
          <ActionAreaCard Key={item.id} {...item}></ActionAreaCard>
          </Grid>
      )
    )}
    </Grid>
  
  )
}

export default ItemList