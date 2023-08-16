import React from 'react'
import ActionAreaCard from './ItemCard'
import { Grid } from '@mui/material'

function ItemList(props) {
  return (<div className = 'flex-container' sx={{ display: 'flex', flexDirection: 'column', flexGrow: 1, alignItems: 'stretch'}}>
      
    
    Listado de Productos
    
      {props.products.map((item) => (
        
        
          //probablemente el problema del display es aca, que estoy haciendo un loop y mostrando un solo componente a la vez, deberia quizas usar un grid donde cargue todos los componentes y mostrarlos juntos 
            <ActionAreaCard Key={item.id} {...item}></ActionAreaCard>
          
        )
      )}
    
  </div>
  )
}

export default ItemList