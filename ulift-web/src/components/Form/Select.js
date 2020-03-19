import React, { useEffect, useRef } from "react";
import { useField } from "@unform/core";

export default function Select({ name, ...rest }) {
  const inputRef = useRef(null);
  // eslint-disable-next-line
  const { fieldName, registerField, error } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: "value"
    });
  }, [fieldName, registerField]);

  return (
    <>
      <select ref={inputRef} {...rest}>
        <option value="" disabled selected>
          Selecione um campus
        </option>
        <option value="aimores">Aimorés</option>
        <option value="contagem">Contagem</option>
        <option value="cristiano-machado">Cristiano Machado</option>
        <option value="barreiro">Barreiro</option>
        <option value="betim">Betim</option>
        <option value="guajajaras">Guajajaras</option>
        <option value="joao-pinheiro">João Pinheiro</option>
        <option value="liberdade">Liberdade</option>
        <option value="linha-verde">Linha Verde</option>
      </select>
      {error && (
        <span style={{ color: "#f00", display: "block" }}>{error}</span>
      )}
    </>
  );
}
