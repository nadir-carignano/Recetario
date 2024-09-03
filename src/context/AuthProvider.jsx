//Importaciones
import React, { createContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';


// Crear el contexto
export const AuthContext = createContext(); //Este contexto será utilizado por otros componentes para acceder al estado y a las funciones relacionadas con la autenticación.

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);//Estado que almacena la información del usuario autenticado. Se inicializa como null porque no hay ningún usuario autenticado al inicio.
  const navigate = useNavigate(); //Para redirigir al usuario a diferentes rutas.

  // Cargar el usuario desde localStorage al iniciar la app
  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem('user'));//Obtiene el usuario almacenado en localStorage. Si existe, se convierte de JSON a objeto.
    if (storedUser) {//Si hay un usuario guardado en localStorage, se actualiza el estado user con ese usuario.
      setUser(storedUser);
    }
  }, []);

  // Registrar un usuario
  const register = (username, password) => {
    const id = new Date().getTime(); // Usamos el timestamp como id
    const newUser = { id, username, password };// Objeto que representa el nuevo usuario, compuesto por un ID, nombre de usuario y contraseña.
    localStorage.setItem('user', JSON.stringify(newUser));// Guarda el nuevo usuario en localStorage.
    setUser(newUser); //Actualiza el estado user con el nuevo usuario.
  };

  // Iniciar sesión
  const login = (username, password) => {
    const storedUser = JSON.parse(localStorage.getItem('user'));//Obtiene el usuario almacenado en localStorage.
    if (storedUser && storedUser.username === username && storedUser.password === password) { //Verifica si el usuario y la contraseña coinciden con los datos almacenados.
      setUser(storedUser);//Si la autenticación es exitosa, actualiza el estado user con el usuario almacenado.
    } else {
      alert('Usuario o contraseña incorrectos');//Muestra un mensaje de alerta si los datos no coinciden.
    }
  };

  // Cerrar sesión
  const logout = () => {
    setUser(null);//Actualiza el estado user a null, indicando que no hay ningún usuario autenticado.
    navigate('/');//Redirige al usuario a la página principal después de cerrar sesión.
  };

  return (
    <AuthContext.Provider value={{ user, register, login, logout }}>
      {children} {/*El contexto AuthContext envuelve a los componentes hijos (children), proporcionando acceso al estado user y a las funciones register, login y logout*/}
    </AuthContext.Provider>
  );
};

export default AuthProvider;// Exportacion del componente.
