//Importaciones
import React, { useContext } from 'react';
import { RecipesContext } from '../context/RecipesContext';
import RecipesItem from './RecipesItem';

const RecipesList = () => {//se encarga de renderizar una lista de recetas.
    const { recipes } = useContext(RecipesContext);//Se obtiene del RecipesContext, que contiene todas las recetas almacenadas en la aplicación.

    return (
        <ul>
            {recipes.map(recipe => (
                <RecipesItem key={recipe.id} recipe={recipe} />
            ))}
        </ul>
    )
}

export default RecipesList;//Exportacion del componente.