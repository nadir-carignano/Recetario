//importaciones
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import AuthProvider from './context/AuthProvider';
import { RecipeProvider } from './context/RecipesContext';
import { PrimeReactProvider } from 'primereact/api';


ReactDOM.render(
  <Router> {/*El componente Router envuelve toda la aplicación, habilitando la navegación entre diferentes rutas*/}
    <AuthProvider>{/*Este proveedor envuelve la aplicación para gestionar el estado de autenticación del usuario. Cualquier componente dentro de AuthProvider puede acceder al contexto de autenticación*/}
      <RecipeProvider>{/*Este proveedor envuelve la aplicación para manejar el estado relacionado con las recetas*/}
        <PrimeReactProvider>{/*Proporciona configuraciones globales y temas a los componentes de PrimeReact que se usan dentro de la aplicación*/}
          <App />{/*El componente principal de la aplicación que contiene la lógica de enrutamiento y los componentes individuales de la aplicación.*/}
        </PrimeReactProvider>
      </RecipeProvider>
    </AuthProvider>
  </Router>,
  document.getElementById('root') /*Selecciona el elemento DOM con el ID root, que es donde se montará toda la aplicación React*/
);