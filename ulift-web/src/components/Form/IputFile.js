import React, { useEffect, useRef } from "react";
import { useField } from "@unform/core";

export default function InputFile({ name, ...rest }) {
  const inputRef = useRef(null);
  const { fieldName, registerField, error } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: "files[0]"
    });
  }, [fieldName, registerField]);

  return (
    <div>
      <input type="file" ref={inputRef} className="input__register" {...rest} />
      {error && (
        <span style={{ color: "#f00", display: "block" }}>{error}</span>
      )}
    </div>
  );
}
