import React, { useState } from "react";

function ItemCount(props) {
    const [clickCount, setClickCount] = useState(1);
  
   
  
    return (
      <div>
  
        <button
          disabled={props.stock === 0}
          onClick={() => props.onConfirm(clickCount)}
          
        >
          <h4>Añadir al carrito</h4>
        </button>
      </div>
    );
  }
  
  export default ItemCount;