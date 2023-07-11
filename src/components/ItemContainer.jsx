
import Typography from '@mui/material/Typography';
import React from 'react'

function ItemContainer(props) {
  return (
    <div>
      <Typography
        sx={{
          bgcolor: 'primary.main',
          
        }}>
        {props.greeting}
      </Typography>  
    </div>
  )
}

export default ItemContainer