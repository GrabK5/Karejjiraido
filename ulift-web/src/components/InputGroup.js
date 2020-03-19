import React from "react";
import Input from "./Form/Input";
import Select from "./Form/Select";

export default function InputGroup({
  label,
  name,
  placeholder,
  type,
  options
}) {
  const SelectHOC = () => (
    <div className="form__inputgroup">
      <label className="form__label">{label}:</label>
      <Select name={name} options={options} />
    </div>
  );

  const InputHOC = () => (
    <div className="form__inputgroup">
      <label className="form__label">{label}:</label>
      <Input
        name={name}
        className=" input__register"
        placeholder={placeholder}
        type={type}
      />
    </div>
  );

  return (
    <div>
      {type === "select" && <SelectHOC />}
      {type !== "select" && <InputHOC />}
    </div>
  );
}
