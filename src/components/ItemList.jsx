import React from 'react'
import ActionAreaCard from './ItemCard'
import { Grid } from '@mui/material'

function ItemList(props) {
  return (<div>
      
    
    Listado de Productos
    <div>
      {props.products.map((item) => { 
        console.log(item.id)
        return(
          
            <ActionAreaCard Key={item.id} {...item}></ActionAreaCard>
          
        )
      })}
    </div>
  </div>
  )
}

export default ItemList