import React, { useState } from 'react';
import api from '../api/api';
import './Producto.css'; // Importar el CSS


const AgregarProducto = () => {
  const [nuevoProducto, setNuevoProducto] = useState({
    nombre: '',
    descripcion: '',
    precio: '',
    imagen_url: '',
    stock: 0,
    categoria: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNuevoProducto((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const agregarProducto = async (e) => {
    e.preventDefault();
    if (!nuevoProducto.nombre || !nuevoProducto.precio || !nuevoProducto.imagen_url) {
      alert('Por favor, completa todos los campos requeridos.');
      return;
    }
    try {
      const response = await api.post('/productos/', {
        nombre: nuevoProducto.nombre,
        descripcion: nuevoProducto.descripcion || null,
        precio: parseFloat(nuevoProducto.precio),
        imagen_url: nuevoProducto.imagen_url,
        stock: parseInt(nuevoProducto.stock) || 0,
        categoria: nuevoProducto.categoria || null,
      });
      console.log('Producto agregado:', response.data);
      setNuevoProducto({
        nombre: '',
        descripcion: '',
        precio: '',
        imagen_url: '',
        stock: 0,
        categoria: '',
      });
    } catch (error) {
      console.error('Error al agregar producto:', error);
      alert('Error al agregar producto. Por favor, verifica los datos.');
    }
  };

  return (
    <div className="form-container">
      <h3>Agregar Nuevo Producto</h3>
      <form onSubmit={agregarProducto}>
        <div>
          <label>Nombre del producto:</label>
          <input
            type="text"
            name="nombre"
            placeholder="Nombre del producto"
            value={nuevoProducto.nombre}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Descripción:</label>
          <textarea
            name="descripcion"
            placeholder="Descripción del producto"
            value={nuevoProducto.descripcion}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Precio:</label>
          <input
            type="number"
            name="precio"
            placeholder="Precio"
            value={nuevoProducto.precio}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Stock:</label>
          <input
            type="number"
            name="stock"
            placeholder="Cantidad en stock"
            value={nuevoProducto.stock}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Categoría:</label>
          <input
            type="text"
            name="categoria"
            placeholder="Categoría del producto"
            value={nuevoProducto.categoria}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>URL de la imagen:</label>
          <input
            type="text"
            name="imagen_url"
            placeholder="URL de la imagen"
            value={nuevoProducto.imagen_url}
            onChange={handleInputChange}
          />
        </div>
        <button type="submit">Agregar Producto</button>
      </form>
    </div>
  );
};

export default AgregarProducto;
