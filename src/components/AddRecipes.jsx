//Importaciones
import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { RecipesContext } from '../context/RecipesContext';
import { Editor } from "primereact/editor";
import { Button } from 'primereact/button';
import { Card } from 'primereact/card';

const AddRecipe = () => {
    //Variables de estado para almacenar los valores introducidos en el formulario:
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [ingredients, setIngredients] = useState('');
    const [procedure, setProcedure] = useState('');
    const { addRecipes } = useContext(RecipesContext);//Función obtenida del contexto RecipesContext que permite agregar una nueva receta a la lista global de recetas.
    const navigate = useNavigate();//Función que permite redirigir al usuario a una ruta específica después de agregar la receta.

    const handleSubmit = (e) => { //Función que se ejecuta al enviar el formulario.
        e.preventDefault();//Evita que el formulario realice su acción predeterminada de recargar la página.
        addRecipes({ id: Date.now(), title, description, ingredients, procedure });//Llama a la función del contexto para agregar una nueva receta.
        //Reseteo de los campos del formulario después de agregar la receta:
        setTitle('');
        setDescription('');
        setIngredients('');
        setProcedure('');
        navigate('/recipesList');//Redirige al usuario a la lista de recetas después de agregar una nueva receta.
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="card ">
                <Card title="Nombre de la receta">{/*Tarjeta de PrimeReact*/}
                    <input
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        placeholder="Agregar nombre de la receta"
                        required
                    />
                </Card>
            </div>

            <div className="card ">
                <Card title="Descripcion">{/*Tarjeta de PrimeReact*/}
                    <input
                        type="text"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        placeholder="Agregar pequeña descripcion de la receta"
                        required
                    />
                </Card>
            </div>
            <div className="card ">
                <Card title="Ingredientes">{/*Tarjeta de PrimeReact*/}
                    <Editor value={ingredients} placeholder='Agrega los ingredientes, personaliza la lista como quieras' onTextChange={(e) => setIngredients(e.htmlValue)} style={{ height: '150px' }} required />{/*Componente para formulario de PrimeReact para darle texto enriquecido al campo de ingredientes.*/}
                </Card>
            </div>
            <div className="card ">
                <Card title="Procedimiento">{/*Tarjeta de PrimeReact*/}
                    <Editor value={procedure} placeholder='Agrega el procedimiento, personalizo como quieras' onTextChange={(e) => setProcedure(e.htmlValue)} style={{ height: '150px' }} required />{/*Componente para formulario de PrimeReact para darle texto enriquecido al campo de procedimiento.*/}
                </Card>
            </div>
            <div className="card flex justify-content-center">
                <Button type='submit' label="Agregar" />{/*Boton de PrimeReact*/}
            </div>
        </form>
    );
};

export default AddRecipe; //Exportacion del componente. 