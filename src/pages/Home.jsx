import React from 'react';
import { useCart } from '../context/CartContext';
import ProductCard from '../components/ProductCard';
import Banner from '../components/Banner'; 
import './Home.css';

// Recordar cambiarlo cuando se inicie el desarrollo del backend
import productsData from '../data/product'; 

const Home = () => {
  const { addToCart } = useCart();

  return (
    <div className="home-container">
      <Banner /> 
      <div className="container product-section">
        <h1 className="text-center">Bienvenido a Lentes AP!</h1>
        <p className="text-center">Explora nuestros lentes y rockea tu verano.</p>
        
        <div className="row">
          {productsData.map((product) => (
            <div key={product.id} className="col-12 col-md-4 mb-4">
              <ProductCard
                id={product.id}        // Aqui pasamos el id
                name={product.name}
                description={product.desc}  // Usamos la descripcion del archivo
                price={product.price}
                image={product.img}     // Usamos la imagen del archivo
                onAddToCart={() => addToCart(product)} // Funcion para agregar al carrito
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
