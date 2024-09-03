//Importaciones
import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthProvider';
import { Button } from 'primereact/button';
import { Card } from 'primereact/card';

const Login = () => {
  const [username, setUsername] = useState('');//Estado que almacena el nombre de usuario que el usuario ingresa en el formulario.
  const [password, setPassword] = useState('');//Estado que almacena la contraseña que el usuario ingresa en el formulario.
  const { login } = useContext(AuthContext);//Función obtenida del contexto de autenticación para iniciar sesión.
  const navigate = useNavigate();//Para redirigir al usuario a diferentes rutas.


  const handleSubmit = (e) => {//Función que se ejecuta cuando el formulario de inicio de sesión se envía.
    e.preventDefault();//Previene el comportamiento predeterminado del formulario (que recargaría la página al enviarse).
    login(username, password);//Llama a la función de inicio de sesión con el nombre de usuario y contraseña ingresados.
    navigate('/');//Redirige al usuario a la página principal después de iniciar sesión exitosamente.
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="card ">
        <Card title="Nombre de usuario"> {/*Tarjeta de PrimeReact*/}
          <input
            type="text"
            placeholder="Nombre de usuario"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </Card>
      </div>

      <div className="card ">
        <Card title="Contraseña"> {/*Tarjeta de PrimeReact*/}
          <input
            type="password"
            placeholder="Contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </Card>
      </div>

      <div className="card flex justify-content-center">
        <Button type='submit' label="Iniciar secion" />{/*Boton de PrimeReact que envia el formulario*/}
      </div>
    </form>
  );
};

export default Login;
