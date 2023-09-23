import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export const Planetas = () => {
  const { store, actions } = useContext(Context);
  return (
    <div>
      <div className="row">
        {store.planetas.map((item) => {
          // Renderizar solo los primeros 10 personajes (5 por fila)
        
            return (
              <div key={item.uid} className="col-12 col-md-2">
                <div className="card">
                  <img
                    className="card-img-top"
                    src={`https://starwars-visualguide.com/assets/img/planets/${item.uid}.jpg`}
                    onError={({ currentTarget }) => {
                      currentTarget.onerror = null; // prevents looping
                      currentTarget.src="https://starwars-visualguide.com/assets/img/planets/13.jpg";
                    }}
                    alt="..."
                  />
                  <div className="card-body">
                    <h3>{item.name}</h3>
                  </div>
                  <div><Link to={`/detallesplaneta/${item.uid}`}>
                  <span className="btn btn-primary btn-lg" href="#" role="button">
                    Más información
                  </span>
                </Link></div>
                </div>
              </div>
            );
        })}
      </div>
    </div>
  );
};


export default Planetas;