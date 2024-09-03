//Importaciones
import React, { useContext } from 'react';
import { AuthContext } from '../context/AuthProvider';


const Logout = () => {
  const { logout } = useContext(AuthContext);//Función obtenida del contexto de autenticación para cerrar secion de un usuario.

  return (
    <div className='divLogout'>
      <button className='BtnRemove' onClick={logout}>Cerrar Sesión</button>{/*Boton que ejecuja la funcion "logout"*/}
    </div>
  );
};

export default Logout;//Exportacion del componente.
