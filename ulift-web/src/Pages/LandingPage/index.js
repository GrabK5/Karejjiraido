import React from "react";

import "./styles.css"
import Direction from "./../../assets/Direction.svg"

function App() {
  return (
    <>
      <div className="parts">
        <div className="first__part padding-strict">
          <div className="container">
            <div className="row">
              <h1 className="margin__top text-center font-weight-bold">
                uLift é uma aplicação perfeita para encontrar carona para chegar a tempo na universidade
              </h1>
            </div>

            <div className="margin__top row d-flex justify-content-center">
              <div className="col-12 col-lg-5">
                <h3>Procure facilmente pela carona mais próxima de acordo com a sua localização.</h3>
              </div>

              <div className="col-12 col-lg-3">
                <img className="direction__img" src={Direction} alt="Caronas" />
              </div>
            </div>
          </div>
        </div>

        <div className="second__part padding-strict">
          <div className="container">
            <div className="col-12 col-lg-4"></div>
            <div className="col-12 col-lg-4"></div>
            <div className="col-12 col-lg-4"></div>
          </div>
        </div>

        <div className="third__part padding-strict">
          <div className="container">

          </div>
        </div>
      </div>
    </>
  );
}

export default App;
