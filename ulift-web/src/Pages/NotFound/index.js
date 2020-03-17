import React from "react";
import Lottie from "react-lottie";
import { Link } from "react-router-dom";

import "./styles.css";
import Logo from "../../assets/Logo.svg";
import Animation from "../../assets/404.json";

const Header = () => {
  return (
    <header className="header--notfound d-flex p-3">
      <Link to="/" className="mx-auto header__link">
        <img src={Logo} alt="uLift Logo" className="header__logo" />
        <span className="header__title align-middle">uLift</span>
      </Link>
    </header>
  );
};

export default function NotFound() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: Animation
  };

  const size = "50%";

  return (
    <>
      <Header />
      <div className="container-fluid">
        <h1 className="text-center mt-5 mb-5">Página não encontrada</h1>

        <Lottie options={defaultOptions} width={size} height={size} />
      </div>
    </>
  );
}
