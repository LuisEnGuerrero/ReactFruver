# ReactFruver

ReactFruver es una aplicación web desarrollada con React que permite gestionar productos de una tienda de frutas y verduras. La aplicación se conecta a la API ShopFlow, desarrollada con FastAPI y utilizando una base de datos MongoDB.

## Características

- **Gestión de Productos:** Permite agregar, editar y eliminar productos.
- **Inventario:** Visualiza y actualiza el stock de los productos.
- **Carrito de Compras:** Añade productos al carrito y realiza compras.
- **Conexión a API:** La aplicación se conecta a la API ShopFlow para gestionar los datos de los productos.

## Tecnologías Utilizadas

- **Frontend:** React, CSS
- **Backend:** FastAPI
- **Base de Datos:** MongoDB
- **HTTP Client:** Axios

## Instalación

Sigue estos pasos para instalar y ejecutar la aplicación en tu entorno local:

1. Clona el repositorio:
   ```sh
   git clone https://github.com/tu-usuario/ReactFruver.git
   ```

2. Navega al directorio del proyecto:
   ```sh
   cd ReactFruver
   ```

3. Instala las dependencias:
   ```sh
   npm install
   ```

4. Inicia la aplicación:
   ```sh
   npm start
   ```

## Configuración de la API

La aplicación está configurada para conectarse a la `ShopFlow API`. API REST FULL Desarrollada con **FastAPI**. 
Asegúrate de que la URL base de la API esté correctamente configurada en el archivo 

`api.js`

```javascript
import axios from 'axios';

const api = axios.create({
    baseURL: 'https://shopflow-api-f6jh.onrender.com/api', // URL base de la API
});

export default api;
```

## Uso

### Gestión de Productos

- **Agregar Producto:** Navega a la sección "Agregar Producto" para añadir nuevos productos.
- **Editar Producto:** En la sección "Inventario", puedes editar el stock y el precio de los productos.
- **Eliminar Producto:** En la sección "Inventario", puedes eliminar productos.

### Carrito de Compras

- **Añadir al Carrito:** En la sección de productos, puedes añadir productos al carrito.
- **Realizar Compra:** En el carrito, puedes realizar la compra de los productos seleccionados.

## Contribuciones

Las contribuciones son bienvenidas. Si deseas contribuir, por favor sigue estos pasos:

1. Haz un fork del repositorio.
2. Crea una nueva rama (`git checkout -b feature/nueva-caracteristica`).
3. Realiza tus cambios y haz un commit (`git commit -am 'Añadir nueva característica'`).
4. Sube tus cambios a la rama (`git push origin feature/nueva-caracteristica`).
5. Abre un Pull Request.

## Licencia

Este proyecto está licenciado bajo la Licencia MIT. Consulta el archivo LICENSE para obtener más información.

---

Desarrollado por **LuisEnGuerrero.Dev**



# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
