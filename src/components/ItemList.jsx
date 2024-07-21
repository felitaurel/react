import React from 'react'
import ActionAreaCard from './ItemCard'
import { Grid } from '@mui/material'
import HeroBanner from './Hero'

function ItemList(props) {
  const items = props.products.map(item =>
    <ActionAreaCard Key={item.id} {...item}/>)
 
  return (
    <Grid container justifyItems="center" spacing={4} sx={{m: 2}}>
      <Grid item xs={12}>
        <HeroBanner />
      </Grid> 
       {props.products.map((item) => (
        
        <Grid item s={12} md={4}>
          <ActionAreaCard Key={item.id} {...item}></ActionAreaCard>
          </Grid>
      )
    )}
    </Grid>
  
  )
}

export default ItemList