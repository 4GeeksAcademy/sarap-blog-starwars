import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/detalles.css";

export const DetallesVehiculos = () => {
    const { store, actions } = useContext(Context);
    const params = useParams();
    const [infoVehiculos, setInfoVehiculos] = useState("");
    window.scrollTo(0,0)

    useEffect(() => {
        fetch(`https://www.swapi.tech/api/vehicles/${params.uid}`)
            .then(response => response.json()) 
            .then(data => setInfoVehiculos(data.result)) 
            .catch(error => error); 
    }, []); 

    return (
        <div>
            <div className="espaciado"></div>
            <div className="encabezado">
                <h3 className="line-2 anim-typewriter">{infoVehiculos === "" ? "Cargando" : infoVehiculos.description}</h3>
            </div>
            <div className="container cuerpodetalles">
                <div className="row">
                <div className="col-12">
                    <h2>Detalles del vehiculo</h2>
                    <hr className="hrblanco"></hr>
                </div>
                   
                <div className="col-sm-12 col-md-6">
                        <img className="imagendetalles"
                            src={`https://starwars-visualguide.com/assets/img/vehicles/${params.uid}.jpg`}
                            alt="..."
                        ></img>
                    </div>

                    <div className="col-sm-12 col-md-6">

                        <h4><span className="titulo">Model: </span> {infoVehiculos === "" ? "Cargando" : infoVehiculos.properties.model}</h4>
                        <h4><span className="titulo">Starship Class: </span> {infoVehiculos === "" ? "Cargando" : infoVehiculos.properties.starship_class}</h4>
                        <h4><span className="titulo">Manufacturer:</span> {infoVehiculos === "" ? "Cargando" : infoVehiculos.properties.manufacturer}</h4>
                        <h4><span className="titulo">Cost:</span> {infoVehiculos === "" ? "Cargando" : infoVehiculos.properties.cost_in_credits} credits</h4>
                        <h4><span className="titulo">Cargo Capacity: </span>{infoVehiculos === "" ? "Cargando" : infoVehiculos.properties.cargo_capacity}</h4>
                        <h4><span className="titulo">Passengers:</span> {infoVehiculos === "" ? "Cargando" : infoVehiculos.passengers}</h4>
                        <h4><span className="titulo">Minimun Crew:</span> {infoVehiculos === "" ? "Cargando" : infoVehiculos.crew}</h4>
                    </div>

                
                </div>
            </div>
        </div>
    );
};

export default DetallesVehiculos;