//Importaciones
import React, { useContext } from 'react';
import { RecipesContext } from '../context/RecipesContext';
import { Card } from 'primereact/card';

const RecipesItem = ({ recipe }) => { //Se encarga de renderizar un elemento individual de receta.
    const { removeRecipes } = useContext(RecipesContext); //Función obtenida del contexto RecipesContext que permite eliminar una receta de la lista global de recetas.

    if (recipe.title !== null) { //Comprueba si el título de la receta no es null. Si el título existe, el componente renderiza la receta.
        return (
            <div className="cardList ">
                <Card title={recipe.title} subTitle={recipe.description}>{/*Tarjeta de PrimeReact*/}
                    <div>
                        <h3>Ingredientes:</h3>
                        <div dangerouslySetInnerHTML={{ __html: recipe.ingredients }} />{/*Se le da el mismo formato que tenia a la hora de carcarlo ya que esta almacenado en formato html.*/}
                    </div>
                    <div>
                        <h3>Procedimiento:</h3>
                        <div dangerouslySetInnerHTML={{ __html: recipe.procedure }} />{/*Se le da el mismo formato que tenia a la hora de carcarlo ya que esta almacenado en formato html.*/}
                    </div>
                    <button className='BtnRemove' onClick={() => removeRecipes(recipe.id)}>Eliminar receta</button>{/*Boton para eliminar la receta mediante 'removeRecipes'*/}
                </Card>
            </div>
        );
    }
};

export default RecipesItem; //Exportacion del componente.