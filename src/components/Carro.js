import { Component } from 'react';
import BubbleAlert from './BubbleAlert';
import DetallesCarro from './DetallesCarro';

const styles = {
    carro: {
        backgroundColor: '#359A2C',
        color: '#FFFFFF',
        border: 'none',
        padding: '15px',
        borderRadius: '15px',
        cursor: 'pointer',
    },
    bubble: {
        position: 'relative',
        left: 12,
        top: 20,
    }
}

class Carro extends Component {
    render() {
        const { carro = [], esCarroVisible, mostrarCarro } = this.props; // Default value for carro
        const cantidad = carro.length > 0 
            ? carro.reduce((acc, el) => acc + (el.cantidad || 0), 0) 
            : 0; // Fallback to avoid undefined reduce error

        return (
            <div>
                <span style={styles.bubble}>
                    {cantidad > 0 && <BubbleAlert value={cantidad} />}
                </span>
                <button onClick={mostrarCarro} style={styles.carro}>
                    Carro
                </button>
                {esCarroVisible && (
                    <DetallesCarro carro={carro.map(item => ({
                        ...item,
                        nombre: item.nombre, // Mostrar claves correctas
                        precio: item.precio,
                        cantidad: item.cantidad,
                      }))}
                    />
                )}
            </div>
        );
    }
}

export default Carro;
