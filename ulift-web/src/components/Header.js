import React from "react";
import { Link } from "react-router-dom";

import Logo from "../assets/Logo.svg";

export default function components() {
  return (
    <header className="header--notfound d-flex p-3">
      <Link to="/" className="mx-auto header__link">
        <img src={Logo} alt="uLift Logo" className="header__logo" />
        <span className="header__title align-middle">uLift</span>
      </Link>
    </header>
  );
}
