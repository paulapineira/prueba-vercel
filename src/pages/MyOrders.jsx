import React from 'react';
import { useCart } from '../context/CartContext'; 
import ProductCard from '../components/ProductCard'; 
import './MyOrders.css'; 

const MyOrders = () => {
  const { cart, removeFromCart, addToCart } = useCart(); 

  const handleCheckout = () => {
    alert('Proceso de compra iniciado');
  };

  return (
    <div className="container mt-5">
      <h2>Mis Pedidos</h2>
      {cart.length === 0 ? (
        <p>No tienes productos en tu pedido.</p>
      ) : (
        <>
          <div className="row">
            {/* Mostramos cada producto en el pedido con la cantidad */}
            {cart.map((order) => (
              <div key={order.id} className="col-12 col-md-4 mb-4">
                <ProductCard
                  id={order.id} 
                  name={order.name}
                  description={order.desc}
                  price={order.price}
                  image={order.img}
                  onAddToCart={() => addToCart(order)}
                  showRemoveButton={true}
                />
                {/* Mostramos la cantidad de productos */}
                <div className="d-flex justify-content-between mt-2">
                  <span>Cantidad: {order.quantity}</span>
                  <button
                    className="btn btn-danger"
                    onClick={() => removeFromCart(order.id)}
                  >
                    Eliminar
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* El boton "Proceder con la compra" aparece abajo de los productos */}
          <div className="d-flex justify-content-center mt-4">
            <button className="btn btn-success" onClick={handleCheckout}>
              Proceder con la compra
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default MyOrders;
