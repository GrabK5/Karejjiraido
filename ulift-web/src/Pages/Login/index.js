import React, { useRef, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import ReactLoading from 'react-loading';
import io from 'socket.io-client';

import "./styles.css";
import Logo from "../../assets/Logo.svg";
import api from "../../services/api";

export default function Login() {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const host = `ws://${window.location.hostname}:4000`;
  const socket = useState(io(host, { transports: ['websocket'] }))[0];

  const history = useHistory();

  async function handleSubmit(e) {
    e.preventDefault();

    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    setLoading(true)
    const response = await api.post("v1/sessions", {
      email,
      password
    });
    setLoading(false);

    if (!response.data.token) {
      setError(true);
      return;
    }
    
    localStorage.setItem('@ulift', response.data.token);
    localStorage.setItem('@ulift-name', response.data.name);

    /*navigator.geolocation.getCurrentPosition((position) => {
      const user = {
        id: localStorage.getItem("@ulift"),
        name: response.data.name,
        location: {
          lat: position.coords.latitude,
          long: position.coords.longitude
        }
      }

      socket.emit("login", user, (callback) => {
        console.log(callback, user);
      });
    });*/

    history.push('/dashboard');
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

          {loading && (
            <div style={{ alignSelf: 'center' }}>
              <ReactLoading color="#004d84" type="bubbles" />
            </div>
          )}

          { error && (
            <span style={{ 
              color: "#e74c3c", fontWeight: 'bold', textAlign: 'center' 
            }}>
              Login incorreto, tente novamente.
            </span>
          )}
        </form>
      </section>
    </main>
  );
}
