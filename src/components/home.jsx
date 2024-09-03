//Importaciones
import React from 'react';
import Carousel from './carrousel';
//imagenes carrousel
import polloPlancha from '../assets/images/polloPlancha.jpg';
import polloEnsalada from '../assets/images/polloEnsalada.jpg'
import wafles from '../assets/images/wafles.jpeg'

//componente Home
const Home = () => {
    const images = [polloPlancha, polloEnsalada, wafles]; //array con la imaneges del carrousel
    return (
        <div>
            <Carousel images={images} /> {/*Carrousel*/}
        </div>
    );
};

export default Home;
