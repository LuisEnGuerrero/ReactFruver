import React, { useState, useContext } from 'react';
import Producto from './Producto';
import ProductosContext from '../context/ProductosContext'; // Importa el contexto

const Productos = ({ agregarAlCarro }) => {
  const { productos, loading } = useContext(ProductosContext);
  const [currentIndex, setCurrentIndex] = useState(0);

  if (loading) {
    return <div>Cargando productos...</div>;
  }

  // Función para avanzar al siguiente producto
  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % productos.length);
  };

  // Función para retroceder al producto anterior
  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? productos.length - 1 : prev - 1
    );
  };

  return (
    <div className="carrusel-container">
      <div className="carrusel">
        {productos.map((producto, index) => {
          let position = 'hidden'; // Elementos fuera de la vista
          if (index === currentIndex) position = 'active';
          else if (index === (currentIndex - 1 + productos.length) % productos.length) position = 'left';
          else if (index === (currentIndex + 1) % productos.length) position = 'right';

          return (
            <div key={producto.id} className={`carrusel-item ${position}`}>
              <Producto producto={producto} agregarAlCarro={agregarAlCarro} />
            </div>
          );
        })}
      </div>
      <div className="carrusel-buttons">
        <button className="carrusel-button" onClick={prevSlide}>
          <img src="/assets/left.png" alt="Anterior" />
        </button>
        <button className="carrusel-button" onClick={nextSlide}>
          <img src="/assets/right.png" alt="Siguiente" />
        </button>
      </div>
    </div>
  );
};

export default Productos;