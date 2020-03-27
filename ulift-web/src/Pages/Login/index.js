import React, { useRef } from "react";
import { Link } from "react-router-dom";

import "./styles.css";
import Logo from "../../assets/Logo.svg";

export default function Login() {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  function handleSubmit(e) {
    e.preventDefault();

    const email = emailRef.current.value;
    const password = passwordRef.current.value;
  }

  return (
    <main className="login">
      <div className="login__logo">
        <Link to="/" className="header__link">
          <img className="img-fluid header__logo" src={Logo} alt="uLift Logo" />
          <span className="header__title">uLift</span>
        </Link>
      </div>

      <section className="login__content">
        <form onSubmit={handleSubmit} className="login__form">
          <label className="login__label">Email:</label>
          <input
            className="login__input"
            placeholder="email@exemplo.com.br"
            type="email"
            required
            autoFocus
            ref={emailRef}
          />
          <label className="login__label">Senha:</label>
          <input
            className="login__input"
            placeholder="******"
            type="password"
            required
            minLength="6"
            ref={passwordRef}
          />
          <div className="login__content--button">
            <button className="login__button">logar</button>
            <Link className="login__forgot" to="/forgot">
              Esqueci minha senha
            </Link>
          </div>
        </form>
      </section>
    </main>
  );
}
