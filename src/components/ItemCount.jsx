import React, { useState } from "react";
import Button  from "@mui/material/Button"
function ItemCount(props) {
    const [clickCount, setClickCount] = useState(1);
  
    
    
  
    return (
      <div>
  
        <Button
          disabled={props.stock === 0}
          onClick={() => props.onConfirm(clickCount)}
          variant= "contained"
        >
          <h4>Añadir al carrito</h4>
        </Button>
      </div>
    );
  }
  
  export default ItemCount;