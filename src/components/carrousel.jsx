//importaciones
import React, { useState, useEffect } from 'react';
import './Carousel.css'; //Estilo del carrousel 

//componente carrousel
const Carousel = ({ images, autoPlayInterval = 3000  }) => { //recibe dos props (images, autoPlayInterval)
    const [currentIndex, setCurrentIndex] = useState(0); //inicializacion de variable de estado con valor inicial en 0

    const goToPrevious = () => {
        const isFirstSlide = currentIndex === 0; //Verifica si la imagen actual es la primera del carrousel
        const newIndex = isFirstSlide ? images.length - 1 : currentIndex - 1;//calcula el indice de la imagen anterior.Si la imagen actual es la primera, se establece el índice como la última imagen del arreglo (images.length - 1). De lo contrario, decrementa el currentIndex en 1.
        setCurrentIndex(newIndex);//Actualiza el estado currentIndex al nuevo índice calculado.
    };

    const goToNext = () => {
        const isLastSlide = currentIndex === images.length - 1;//Verifica si la imagen actual es la última del carrusel.
        const newIndex = isLastSlide ? 0 : currentIndex + 1;//Calcula el índice de la siguiente imagen. Si la imagen actual es la última, se establece el índice como 0 (la primera imagen). De lo contrario, incrementa el currentIndex en 1.
        setCurrentIndex(newIndex);//Actualiza el estado currentIndex al nuevo índice calculado.
    };

    useEffect(() => {
        const intervalId = setInterval(goToNext, autoPlayInterval);//Configura un intervalo que ejecuta la función goToNext cada autoPlayInterval milisegundos, lo que hace que el carrusel cambie automáticamente a la siguiente imagen.

        return () => clearInterval(intervalId);//Limpia el intervalo cuando el componente se desmonta o cuando currentIndex o autoPlayInterval cambian, evitando que se creen múltiples intervalos.
    }, [currentIndex, autoPlayInterval]);

    return (
        <div className="carousel">
            <div className="carousel__images">
                <img src={images[currentIndex]} alt={`Slide ${currentIndex}`} className="carousel__image" />
            </div>
            <button onClick={goToPrevious} className="carousel__button carousel__button--left">❮</button>
            <button onClick={goToNext} className="carousel__button carousel__button--right">❯</button>
        </div>
    );
};

export default Carousel; //exportacion del componente
