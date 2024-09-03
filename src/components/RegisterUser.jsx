//Importaciones
import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthProvider';
import { Button } from 'primereact/button';
import { Card } from 'primereact/card';


const Register = () => {
    const navigate = useNavigate();//Para redirigir al usuario a diferentes rutas.
    const [username, setUsername] = useState('');//Estado que almacena el nombre de usuario ingresado en el formulario.
    const [password, setPassword] = useState('');//Estado que almacena la contraseña ingresada en el formulario.
    const { register } = useContext(AuthContext);//Función obtenida del contexto de autenticación para registrar un nuevo usuario.

    const handleSubmit = (e) => {//Función que se ejecuta cuando el formulario de registro se envía.
        e.preventDefault();//Previene el comportamiento predeterminado del formulario (que recargaría la página al enviarse).
        register(username, password);//Llama a la función de registro para crear un nuevo usuario con el nombre de usuario y contraseña ingresados.
        navigate('/')//Redirige al usuario a la página principal después de registrarse.
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
                <Card title="Contraseña">{/*Tarjeta de PrimeReact*/}
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
                <Button type='submit' label="Registrate" />{/*Boton de PrimeReact que envia el formulario*/}
            </div>
        </form>
    );
};

export default Register;//Exportacion del componente.
