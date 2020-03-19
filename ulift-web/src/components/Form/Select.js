import React, { useEffect, useRef } from "react";
import { useField } from "@unform/core";

export default function Select({ name, options, ...rest }) {
  const inputRef = useRef(null);
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
      <select className="form__select" ref={inputRef} {...rest}>
        <option value="" disabled selected>
          Selecione um campus
        </option>
        {options.map(item => (
          <option key={item.label} value={item.value}>
            {item.label}
          </option>
        ))}
      </select>
      {error && (
        <span style={{ color: "#f00", display: "block" }}>{error}</span>
      )}
    </>
  );
}
