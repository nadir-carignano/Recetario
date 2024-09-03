//Importaciones
import React from 'react';
import { Outlet } from 'react-router-dom';
import Nav from './components/Nav'; 

const Layout = () => {
  return (
    <div>
      <Nav />{/*Componente de navegacion de la pagina*/}
      <main>
        <Outlet />{/*Renderiza el componente hijo correspondiente a la ruta actual.*/}
      </main>
    </div>
  );
};

export default Layout;//Exportacion del componente
