//Importacones
import React, { createContext, useState, useEffect } from 'react';


export const RecipesContext = createContext();//Será utilizado para compartir datos relacionados con las recetas en toda la aplicación.

export const RecipeProvider = ({ children }) => {
  const [recipes, setRecipes] = useState(() => { //Inicializa el estado recipes comprobando si hay recetas guardadas en localStorage. 
    const savedRecipes = localStorage.getItem('recipes');
    return savedRecipes ? JSON.parse(savedRecipes) : [];
  });

  useEffect(() => {//Se ejecuta cada vez que el estado recipes cambia.
    localStorage.setItem('recipes', JSON.stringify(recipes));
  }, [recipes]);//Guarda el estado recipes en localStorage en formato JSON

  const addRecipes = (recipe) => {//Función que agrega una nueva receta al estado recipes.
    setRecipes([...recipes, recipe]);//Actualiza el estado recipes añadiendo la nueva receta al final del arreglo existente.
  };

  const removeRecipes = (id) => {//Función que elimina una receta del estado recipes basada en su id.
    setRecipes(recipes.filter(recipe => recipe.id !== id));//Filtra el arreglo recipes para eliminar la receta cuyo id coincida con el id pasado como argumento.
  };

  return (
    <RecipesContext.Provider value={{ recipes, addRecipes, removeRecipes }}>{/*Pasa el estado recipes y las funciones addRecipes y removeRecipes como valores del contexto, para que puedan ser accedidos desde otros componentes.*/}
      {children}{/*El componente RecipeProvider envuelve a los componentes hijos ({children}) dentro del RecipesContext.Provider.*/}
    </RecipesContext.Provider>
  );
};
