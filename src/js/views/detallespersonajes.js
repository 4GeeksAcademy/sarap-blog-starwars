import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/detalles.css";


export const DetallesPersonajes = () => {
    const { store, actions } = useContext(Context);
    const params = useParams();
    const [infoPersonaje, setInfoPersonaje] = useState("");
    window.scrollTo(0,0)

    useEffect(() => {
        fetch(`https://www.swapi.tech/api/people/${params.uid}`)
            .then(response => response.json())
            .then(data => setInfoPersonaje(data.result))
            .catch(error => error);

            
    }, []);

    return (
        <div>
            <div className="espaciado"></div>    
        <div className="encabezado">
            <h3 className= "line-2 anim-typewriter-2">{infoPersonaje === "" ? "Cargando" : infoPersonaje.description}</h3>
        </div>
            <div className="container cuerpodetalles">
                <div className="row">
                <div className="col-12">
                    <h2>Detalles del personaje</h2>
                    <hr className="hrblanco"></hr>
                </div>
                    
                <div className="col-sm-12 col-md-5">
                        <img className="imagendetalles"
                            src={`https://starwars-visualguide.com/assets/img/characters/${params.uid}.jpg`}
                            alt="..."
                        ></img>
                    </div>

                    <div className="col-sm-12 col-md-7">
                        <h4><span className="titulo">Name: </span> {infoPersonaje === "" ? "Cargando" : infoPersonaje.properties.name}</h4>
                        <h4><span className="titulo">Height:</span> {infoPersonaje === "" ? "Cargando" : infoPersonaje.properties.height}</h4>
                        <h4><span className="titulo">Mass:</span> {infoPersonaje === "" ? "Cargando" : infoPersonaje.properties.mass}</h4>
                        <h4><span className="titulo">Gender:</span> {infoPersonaje === "" ? "Cargando" : infoPersonaje.properties.gender}</h4>                     
                        <h4><span className="titulo">Hair color: </span>{infoPersonaje === "" ? "Cargando" : infoPersonaje.properties.hair_color}</h4> 
                        <h4><span className="titulo">Skin color:</span> {infoPersonaje === "" ? "Cargando" : infoPersonaje.properties.skin_color}</h4> 
                        
                    </div>

                   
                </div>
            </div>
        </div>
    );
};

export default DetallesPersonajes;
