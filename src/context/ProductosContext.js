import React, { createContext, useState, useEffect } from 'react';
import api from '../api/api'; // Importa el archivo para manejar solicitudes API

const ProductosContext = createContext();

export const ProductosProvider = ({ children }) => {
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProductos = async () => {
      try {
        const response = await api.get('/productos/');
        setProductos(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error al cargar productos:', error);
        setLoading(false);
      }
    };
    fetchProductos();
  }, []);

  const updateProducto = (id, updatedProducto) => {
    setProductos(productos.map(producto => 
      producto.id === id ? updatedProducto : producto
    ));
  };

  return (
    <ProductosContext.Provider value={{ productos, loading, updateProducto }}>
      {children}
    </ProductosContext.Provider>
  );
};

export default ProductosContext;
