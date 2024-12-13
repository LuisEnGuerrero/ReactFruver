import { Component } from 'react';
import Button from './Button';
import './Producto.css'; // Importa el archivo CSS


class Producto extends Component {
    render() {
        const { producto, agregarAlCarro } = this.props;
        const { imagen_url, nombre, precio, descripcion, stock } = producto; // Desestructurar para facilitar el manejo
    
        return (
          <div className="producto">
            {imagen_url 
              ? <img src={imagen_url} alt={nombre || "Producto"} title={descripcion || "Sin descripción"} />
              : <p>Imagen no disponible</p>
            }
            {stock === 0 && (
              <div className="agotado">
                <div className="agotado-text">Agotado!</div>
              </div>
            )}
            <h3>{nombre || "Producto sin nombre"} <span style={{ fontWeight: 'normal', fontSize: '14px' }}>({stock || 0})</span></h3>
            <p>${precio?.toFixed(2) || "0.00"}</p>
            <Button className="button" onClick={() => agregarAlCarro(producto)} disabled={stock === 0}>
              Agregar al carro
            </Button>
          </div>
        );    
    }
}

export default Producto;
