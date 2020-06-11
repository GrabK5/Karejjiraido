import React from "react";
import {Link} from "react-router-dom";

import "./styles.css"
import Navbar from "./../../components/Navbar"
import Direction from "./../../assets/Direction.svg"
import Pessoas from "./../../assets/Pessoas.svg"
import Dinheiro from "./../../assets/Dinheiro.svg"
import Tempo from "./../../assets/Tempo.svg"
import Group from "./../../assets/Group.svg"

function LandingPage() {
  return (
    <>
      <Navbar
        bgColor='white'
      />

      <div className="parts">
        <div className="first__part pt-4">
          <div className="container margins">
            <div className="row">
              <h1 className="text-center font-weight-bold">
                uLift é a aplicação perfeita para encontrar carona e chegar a tempo na sua faculdade
              </h1>
            </div>

            <div className="margin__top row d-flex justify-content-center">
              <div className="col-12 col-lg-6 text-justify">
                <h3>Uma plataforma de fácil uso, para estudantes conseguirem carona de acordo com sua localização.</h3>
              </div>

              <div className="col-12 col-lg-4 text-center h-100">
                <img
                  className="images image__direction"
                  src={Direction}
                  alt="Caronas"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="second__part padding-strict">
          <div className="container">
            <div className="row margins justify-content-md-center text-center">
              <div className="col-12 pb-5">
                <h1>E quais as vantagens?</h1>
              </div>

              <div className="col-12 col-lg-4">
                <img
                  className="images"
                  src={Tempo}
                  alt="Tempo"
                />

                <h4 className="pt-4 pb-0">Otimizar seu tempo</h4>
              </div>

              <div className="col-12 col-lg-4">
                <img
                  className="images"
                  src={Pessoas}
                  alt="Pessoas"
                />

                <h4 className="pt-4 pb-0">Conhecer novas pessoas</h4>
              </div>

              <div className="col-12 col-lg-4">
                <img
                  className="images"
                  src={Dinheiro}
                  alt="Dinheiro"
                  />

                <h4 className="pt-4 pb-0">Economizar algum dinheiro</h4>
              </div>
            </div>
          </div>
        </div>

        <div className="third__part">
          <div className="container text-center padding-strict margins">
            <div className="col-12 h-100 pb-3">
              <img
                className="images image__group"
                src={Group}
                alt="Carro ao luar"
              />
            </div>

            <div className="col-12 text-center text-white">
              <h3>Você também pode oferecer caronas e economizar no seu combustível.</h3>

              <Link to="/register">
                <button className="col-12 col-md-6 btn btn-lg btn-light font-weight-bold mt-4">
                  Começar a experiência
                </button>
              </Link>

              <h6 className="pt-3">
                Já possui conta?

                <Link
                  to="/login"
                  className="sign-link text-decoration-none"
                >
                  Entrar
                </Link>
              </h6>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default LandingPage;
