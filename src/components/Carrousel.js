import React from 'react';

import '../css/Carrousel.css'


import imagen1 from '../assets/backgrounds/background_6.jpg'
import imagen2 from '../assets/backgrounds/background_1.jpg'
import imagen3 from '../assets/backgrounds/background_3.jpg'

const Carrousel = () => {
    return (
        <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
            <div className="carousel-inner  imagen">

                <div className="carousel-item ">
                    <div className="carousel-caption text-right ">
                        <cite className="cita ">"Después de Dios está el Derecho, porque siempre busca la Justicia”</cite>
                    </div>
                    <img src={imagen1} alt="First slide" />
                </div>

                <div className="carousel-item ">
                    <div className="carousel-caption text-right ">
                        <cite className="cita ">"Después de Dios está el Derecho, porque siempre busca la Justicia”</cite>
                    </div>
                    <img src={imagen2} alt="Second slide" />
                </div>

                <div className="carousel-item active">
                    <div className="carousel-caption text-right ">
                        <h1 className="titleRm">RM Asociados <br /> <h2 className="subtitleRm">Despacho de abogados</h2></h1>
                    </div>
                    <img src={imagen3} alt="Third slide" />
                </div> 

            </div>
            <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="sr-only">Next</span>
            </a>
        </div>

    );
}

export default Carrousel;