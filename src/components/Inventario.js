import React, { useContext } from 'react';
import api from '../api/api'; // Importa el archivo para manejar solicitudes API
import ProductosContext from '../context/ProductosContext'; // Importa el contexto
import './Inventario.css'; // Importa el archivo CSS

function Inventario() {
  const { productos, loading, updateProducto } = useContext(ProductosContext);

  const handlePriceChange = (id, newPrecio) => {
    updateProducto(id, { ...productos.find(p => p.id === id), precio: parseFloat(newPrecio) });
  };

  const handleStockChange = (id, newStock) => {
    updateProducto(id, { ...productos.find(p => p.id === id), stock: parseInt(newStock, 10) });
  };

  const handleDelete = async (id) => {
    try {
      await api.delete(`/productos/${id}`);
      updateProducto(id, null);
    } catch (error) {
      console.error('Error al eliminar producto:', error);
    }
  };

  const handleSave = async (id, stock, precio) => {
    try {
      await api.put(`/productos/${id}`, { stock, precio });
      alert('Stock y precio actualizados con éxito');
    } catch (error) {
      console.error('Error al actualizar stock y precio:', error);
      alert('Hubo un problema al actualizar el stock y precio. Intenta nuevamente.');
    }
  };

  if (loading) {
    return <div>Cargando productos...</div>;
  }

  return (
    <div className="inventario">
      <h2>Inventario</h2>
      <table className="inventario-table">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Categoría</th>
            <th>Precio</th>
            <th>Stock</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {productos.map(producto => (
            <tr key={producto.id}>
              <td>{producto.nombre}</td>
              <td>{producto.categoria}</td>
              <td>
                <input 
                  type="number" 
                  value={producto.precio.toFixed(2)}
                  onChange={(e) => handlePriceChange(producto.id, e.target.value)} 
                />
              </td>
              <td>
                <input 
                  type="number" 
                  value={producto.stock} 
                  onChange={(e) => handleStockChange(producto.id, e.target.value)} 
                />
              </td>
              <td>
                <button onClick={() => handleSave(producto.id, producto.stock, producto.precio)}>Guardar</button>
                <button className="delete-button" onClick={() => handleDelete(producto.id)}>Eliminar</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Inventario;