import React, { useState } from "react";

function ItemCount(props) {
    const [clickCount, setClickCount] = useState(1);
  
    function handleClickAdd() {
      if (clickCount === props.stock) {
      } else {
        setClickCount(clickCount + 1);
      }
    }
  
    function handleClickSub() {
      if (clickCount > 1) {
        setClickCount(clickCount - 1);
      }
    }
  
    return (
      <div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
          }}
          
        >
          <button
            disabled={props.stock === 0}
            
            onClick={handleClickSub}
          >
            -
          </button>
          <h2 >{clickCount}</h2>
          <button
            disabled={props.stock === 0}
          
            onClick={handleClickAdd}
          >
            +
          </button>
        </div>
  
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