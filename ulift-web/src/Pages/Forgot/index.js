import React, { useState } from "react";

import "./styles.css";
import Header from "../../components/Header";

export default function Forgot() {
  const [msg, setMsg] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <>
      <Header />
      <section className="forgot">
        <form onSubmit={handleSubmit} className="forgot__form">
          <div className="forgot__form__inputgroup">
            <label className="forgot__form__label">Digite seu email:</label>

            <input
              className="forgot__form__input"
              type="email"
              required
              placeholder="email@exemplo.com"
            />
          </div>
          <button className="forgot__form__button" type="submit">
            Recuperar
          </button>
          <span className="forgot__form__msg">{msg}</span>
        </form>
      </section>
    </>
  );
}
