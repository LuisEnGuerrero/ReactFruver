import { Link, useLocation } from 'react-router-dom';
import Carro from './Carro';
import './Navbar.css'; // Importa el archivo CSS

function Navbar({ carro, esCarroVisible, mostrarCarro }) {
  const location = useLocation();

  return (
    <nav className="navbar">
      <div className="logoTitle">
        <img src="/logo192.png" alt="Logo" className="logo" />
        <h1 className="title">Mi Tienda</h1>
      </div>
      <div className="links">
        {location.pathname !== '/' && (
          <Link to="/" className="linkButton">
            Productos
          </Link>
        )}
        {location.pathname !== '/agregar-producto' && (
        <Link to="/agregar-producto" className="linkButton">
          Agregar Productos
        </Link>
        )}
          {location.pathname !== '/inventario' && (
          <Link to="/inventario" className="linkButton">
            Agregar Stock
          </Link>
        )}
      </div>
      <Carro carro={carro} esCarroVisible={esCarroVisible} mostrarCarro={mostrarCarro} />
    </nav>
  );
}

export default Navbar;