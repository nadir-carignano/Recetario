//Importaciones:
import React, { useContext } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Layout from './Layout';
import Home from './components/home';
import Register from './components/RegisterUser';
import Login from './components/LoginUser';
import Logout from './components/LogoutUser';
import AddRecipe from './components/AddRecipes';
import RecipesList from './components/RecipesList';
import { AuthContext } from './context/AuthProvider';
//Estilos:
import './index.css'; //Estilo de la pagina en general
//Estilos que utiliza primereact:
import 'primereact/resources/themes/saga-blue/theme.css';  //importa un tema especifico de primereact
import 'primereact/resources/primereact.min.css';  //Estilos basicos        
import 'primeicons/primeicons.css'; //Importacion de icono que utiliza                    

const App = () => { //Componente App
  const { user } = useContext(AuthContext); //Extrae el valor de user, que indica si hay un usuario autenticado o no.

  return (
    <div>
      <Routes> {/*Contiene todas las rutas definidas en la aplicación*/}
        <Route path='/' element={<Layout />}>{/*Define la ruta raíz '/', que carga el componente Layout.Dentro de este hay rutas anidadas que definen las diferentes páginas de la aplicación.*/}
          <Route index element={<Home />} />{/*Define la ruta raíz '/' que carga el componente Home. El atributo index indica que esta es la ruta por defecto*/}
          <Route path='/recipesList' element={<RecipesList />} />{/*Define la ruta /recipesList que carga el componente RecipesList*/}
          <Route path='/register' element={user ? <Navigate to="/" /> : <Register />} />{/*Define la ruta /register para el registro de usuarios. Si user está autenticado, redirige a la página principal ('/'), de lo contrario, carga el componente Register*/}
          <Route path='/login' element={user ? <Navigate to="/" /> : <Login />} />{/*Define la ruta /login para el inicio de secion de usuarios. Si user está autenticado, redirige a la página principal ('/'), de lo contrario, carga el componente Login*/}
          <Route path='/logout' element={user ? <Logout /> : <Navigate to="/" />} />{/*Define la ruta /logout para cerrar sesión. Si user está autenticado, carga el componente Logout, de lo contrario, redirige a la página de inicio(/)*/}
          <Route path='/addRecipe' element={user ? <AddRecipe /> : <Navigate to="/login" />} />{/*Define la ruta /addRecipe para añadir una receta. Si el usuario está autenticado, carga el componente AddRecipe; si no, redirige a la página de inicio de sesión*/}
        </Route>
      </Routes>
    </div>
  )
}


export default App;//Exportacion del componente
