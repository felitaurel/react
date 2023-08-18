import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getOrder } from "./firebase";

function OrderConfirm() {
  const [orderData, setOrderData] = useState(null);

  const { id } = useParams();

  useEffect(() => {
    getOrder(id).then((order) => {
      setOrderData(order);
    });
  }, []);

  return (
    <div>
      <h1>Gracias por tu compra! </h1>
      {orderData !== null ? (
        <div>
          <p>
            Tus productos comprados:
            {orderData.items.map((item) => {
              return (
                <div>
                  {item.nombre} - {item.count} unidades, orden de compra: {orderData.id}
                </div>
              );
            })}
          </p>
        </div>
      ) : (
        <p>Cargando</p>
      )}
    </div>
  );
}

export default OrderConfirm;