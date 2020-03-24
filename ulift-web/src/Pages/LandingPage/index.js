import React from "react";

import "./styles.css"
import Direction from "./../../assets/Direction.svg"

function App() {
  return (
    <>
      <div className="first__part">
        <div className="container">
          <div className="row">
            <h1 className="margin__top text-center font-weight-bold">
              uLift é uma aplicação perfeita para encontrar carona para chegar a tempo na universidade
            </h1>
          </div>

          <div className="margin__top row d-flex justify-content-center">
            <div className="col-12 col-lg-6 text-justify">
              <h2>Procure facilmente pela carona mais próxima de acordo com a sua localização.</h2>
            </div>

            <div className="col-12 col-lg-4">
              <img className="direction__img" src={Direction} alt="Caronas" />
            </div>
          </div>

        </div>
      </div>

      <div className="container-fluid second__part">
        <div className="container">

        </div>
      </div>

      <div className="container-fluid third__part">
        <div className="container">

        </div>
      </div>
    </>
  );
}

export default App;
