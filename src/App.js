import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Productos from './components/Productos';
import Layout from './components/Layout';
import Title from './components/Title';
import Navbar from './components/Navbar';
import AgregarProducto from './components/AgregarProducto';
import api from './api/api'; // Archivo para manejar solicitudes API
import Inventario from './components/Inventario';
import { ProductosProvider } from './context/ProductosContext';
import './App.css';


function App() {
  const [productos, setProductos] = useState([]); // Estado para los productos
  const [carro, setCarro] = useState([]); // Estado para el carro
  const [esCarroVisible, setEsCarroVisible] = useState(false); // Estado para visibilidad del carrito
  const [cargando, setCargando] = useState(true); // Estado para manejar la carga


  // Cargar productos desde la API al inicializar
  useEffect(() => {
    const fetchProductos = async () => {
      try {
        const response = await api.get('/productos/');
        setProductos(response.data); // Guardar los productos en el estado
      } catch (error) {
        console.error('Error al cargar productos:', error);
      } finally {
        setCargando(false); // Finalizar la carga
      }
    };
    fetchProductos();
  }, []); // Ejecutar solo una vez al montar el componente

  // Depuración del estado del carrito
  useEffect(() => {
    console.log("Estado actual del carrito:", carro);
  }, [carro]); // Ejecutar cada vez que cambie el estado del carrito

  // Depuración de la visibilidad del carrito
  useEffect(() => {
    console.log("Visibilidad del carrito:", esCarroVisible);
  }, [esCarroVisible]); // Ejecutar cada vez que cambie la visibilidad del carrito


  const agregarAlCarro = (producto) => {
    setCarro((prevCarro) => {
      const itemEnCarro = prevCarro.find(item => item.id === producto.id);
      if (itemEnCarro) {
        // Incrementar cantidad si ya está en el carro
        return prevCarro.map(item =>
          item.id === producto.id
            ? { ...item, cantidad: item.cantidad + 1 }
            : item
        );
      }
      // Agregar nuevo producto al carro
      return [...prevCarro, { ...producto, cantidad: 1 }];
    });
  };


  const mostrarCarro = () => {
    setEsCarroVisible(!esCarroVisible); // Alternar visibilidad del carrito
  };
  
  if (cargando) {
    return (
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <div>
          <p style={{ fontSize: '24px', textAlign: 'center' }}>Cargando productos del inventario... Por favor espere!</p>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <div className="loader"></div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <ProductosProvider>
      <Router>
        <Navbar carro={carro} esCarroVisible={esCarroVisible} mostrarCarro={mostrarCarro} />
        <Layout>
          <Title />
          <Routes>
            <Route
              path="/"
              element={<Productos productos={productos} agregarAlCarro={agregarAlCarro} />}
            />
            <Route path="/agregar-producto" element={<AgregarProducto />} />
            <Route path="/inventario" element={<Inventario />} />
          </Routes>
        </Layout>
      </Router>
    </ProductosProvider>
  );
}


export default App;
