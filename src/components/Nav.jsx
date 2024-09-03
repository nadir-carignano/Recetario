//Importaciones
import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { MegaMenu } from 'primereact/megamenu';
import 'primeicons/primeicons.css'; //Estilos para los iconos de prime react.


import { AuthContext } from '../context/AuthProvider'; //Contexto para manejar la autenticación y el estado del usuario.

function Nav() {
  const navigate = useNavigate();//Función que permite redirigir al usuario a una ruta específica después de agregar la receta.
  const { user } = useContext(AuthContext);//Se obtiene del AuthContext, que indica si el usuario está autenticado o no.

  const items = [//Un array de objetos que define las opciones del menú del MegaMenu.
    {
      label: 'Inicio',//El texto que se muestra en el ítem.
      icon: 'pi pi-home',//La clase del icono de PrimeIcons que se muestra junto al texto.
      command: () => {//Una función que se ejecuta cuando el ítem del menú es clickeado, usando navigate para cambiar la ruta.
        navigate('/')
      }
    },
    {
      label: 'Recetas',
      icon: 'pi pi-apple',
      command: () => {
        navigate('/recipesList')
      }
    },
    user && {//Cuando el usuario esta autenticado deja ver esta opcion
      label: 'Agregar Receta',
      icon: 'pi pi-plus-circle',
      command: () => {
        navigate('/addRecipe')
      }
    },
    !user && {//Cuando el usuario no esta autenticado deja ver esta opcion
      label: 'Registrase',
      icon: 'pi pi-user-plus',
      command: () => {
        navigate('/register')
      }
    },
    !user && {//Cuando el usuario no esta autenticado deja ver esta opcion
      label: 'Iniciar secion',
      icon: 'pi pi-user',
      command: () => {
        navigate('/login')
      }
    },
    user && {//Cuando el usuario esta autenticado deja ver esta opcion
      label: 'Cerrar secion',
      icon: 'pi pi-power-off',
      command: () => {
        navigate('/logout')
      }
    },
  ].filter(Boolean);//Filtra los valores false o null del array, asegurando que solo los ítems válidos sean incluidos en el menú.

  return (
    <div className="cardNav">
      <MegaMenu model={items} breakpoint="960px" />{/*Menu de PrimeReact donde te cargan todos los items de arriba*/}
    </div>
  )
}


export default Nav;//Exportacion del componente