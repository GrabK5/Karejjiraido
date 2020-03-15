import React from "react";

import "./styles.css";
import { Container } from "react-bootstrap";
import Lottie from "react-lottie";
import { Link } from "react-router-dom";

import Logo from "../../assets/logo.svg";
import Animation from "../../assets/404.json";

const Header = () => {
  return (
    <header className="header">
      <Link to="/" className="header__link">
        <img src={Logo} alt="uLift Logo" className="header__logo" />
        <span className="header__title">uLift</span>
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

  const size = "60%";

  return (
    <>
      <Header />
      <Container fluid="md">
        <h1 className="content_title">Página não encontrada</h1>

        <Lottie options={defaultOptions} width={size} height={size} />
      </Container>
    </>
  );
}
