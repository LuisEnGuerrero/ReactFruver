import { Component } from 'react';
import api from '../api/api'; // Importa api para manejar las solicitudes a la API

const styles = {
    detallesCarro: {
        backgroundColor: '#FFFFFF',
        position: 'absolute',
        marginTop: 30,
        boxShadow: '1px 5px 5px rgba(0, 0, 0, 0.3)',
        borderRadius: '5px',
        width: '300px',
        right: 50,
        zIndex: 1000, // Asegúrate de que el contenedor esté por encima de otros elementos
    },
    ul: {
        margin: 0,
        padding: 0,
    },
    producto: {
        listStyleType: 'none',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '5px 15px',
        borderBottom: 'solid 1px #aaa',
    },
    img: {
        width: '50px',
        maxheight: '32px',
        height: 'auto', /* Mantener la proporción de la imagen */
        marginRight: '10px',
        objectFit: 'cover',
        borderRadius: '5px',
    },
    productoNombre: {
        flex: 1,
        marginLeft: '10px',
    },
    productoCantidad: {
        fontWeight: 'bold',
    },
    productoTotal: {
        fontWeight: 'semibold',
    },
    totalCarrito: {
        marginTop: '10px',
        fontWeight: 'bold',
        textAlign: 'right',
        marginRight: '15px',
    },
    buttonCompra: {
        marginTop: '15px',
        width: '85%', // Ajustar el ancho para dejar espacio para el botón de cancelar
        padding: '10px',
        backgroundColor: '#359A2C',
        color: '#FFFFFF',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
        fontWeight: 'bold',
    },
    buttonCompraImg: {
        width: '20px', /* Ajusta el tamaño del icono */
        height: '20px', /* Ajusta el tamaño del icono */
        marginRight: '10px',
    },
    buttonCompraHover: {
        backgroundColor: '#26791A',
    },
    buttonCancelar: {
        marginTop: '15px',
        width: '15%', // Ancho del botón de cancelar
        padding: '10px',
        backgroundColor: '#FF0000',
        color: '#FFFFFF',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
        fontWeight: 'bold',
    },
    buttonCancelarImg: {
        width: '20px', /* Ajusta el tamaño del icono */
        height: '20px', /* Ajusta el tamaño del icono */
        marginRight: '5%',
        color: '#FFFFFF',
    },
    buttonCancelarHover: {
        backgroundColor: '#CC0000',
    },
};


class DetallesCarro extends Component {
    state = {
        carro: this.props.carro,
    };
    
    calcularTotalCarrito = () => {
        const { carro } = this.props;
        return carro.reduce((total, producto) => {
            return total + producto.cantidad * producto.precio;
        }, 0).toFixed(2);
    };

    realizarCompra = async () => {
        const { carro } = this.props;

        try {
            // Validar que haya suficientes existencias para cada producto
            for (const producto of carro) {
                const nuevoStock = producto.stock - producto.cantidad;

                if (nuevoStock < 0) {
                    alert(`No hay suficiente stock para el producto: ${producto.nombre}`);
                    // Vaciar el carrito y cerrar la ventana
                    this.setState({ carro: [] });
                    window.location.reload();
                    console.log("Se vació el carrito y se cerró la ventana");
                    return;
                }

                // Actualizar el stock en la base de datos
                const response = await api.put(`/productos/${producto.id}`, {
                    stock: nuevoStock,
                });

                if (response.status !== 200) {
                    throw new Error(`Error actualizando producto: ${producto.nombre}`);
                }
            }

            // Construir el mensaje de compra realizada
            let mensajeCompra = 'Compra realizada con éxito:\n\n';
            carro.forEach(producto => {
                mensajeCompra += `${producto.nombre} - Cantidad: ${producto.cantidad} a Precio de: $${producto.precio.toFixed(2)}c/u = $${producto.cantidad * producto.precio}\n`;
            });
            mensajeCompra += `\nTotal: $${this.calcularTotalCarrito()}`;

            // Mostrar el mensaje de compra realizada
            alert(mensajeCompra);

            // Vaciar el carrito y cerrar la ventana
            this.setState({ carro: [] });
            window.location.reload();

        } catch (error) {
            console.error('Error al realizar la compra:', error);
            alert('Hubo un problema al realizar la compra. Intenta nuevamente.');
            // Vaciar el carrito y cerrar la ventana
            this.setState({ carro: [] });
            window.location.reload();
        }
    };

    cancelarCompra = () => {
        // Vaciar el carrito y cerrar la ventana
        this.setState({ carro: [] });
        window.location.reload();
    };

    render() {
        const { carro } = this.props;

        return (
            <div style={styles.detallesCarro}>
                <ul style={styles.ul}>
                    {carro.map((producto) => (
                        <li style={styles.producto} key={producto.id}>
                            <img
                                alt={producto.nombre}
                                src={producto.imagen_url}
                                style={styles.img}
                            />
                            <span style={styles.productoNombre}>{producto.nombre}</span>
                            <span style={styles.productoCantidad}>{producto.cantidad}</span>
                            <span style={styles.productoTotal}> =
                                ${(producto.cantidad * producto.precio).toFixed(2)}
                            </span>
                        </li>
                    ))}
                </ul>
                <div style={styles.totalCarrito}>
                    Total en Carrito: ${this.calcularTotalCarrito()}
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <button
                        style={styles.buttonCancelar}
                        onClick={this.cancelarCompra}
                    >
                        <img src="/assets/delete.png" alt="Cancelar" style={styles.buttonCancelarImg} />
                    </button>
                    <button
                        style={styles.buttonCompra}
                        onClick={this.realizarCompra}
                    >
                        <img src="/assets/shopping.png" alt="Comprar" style={styles.buttonCompraImg} />Comprar
                    </button>
                </div>
            </div>
        );
    }
}
  
export default DetallesCarro;
