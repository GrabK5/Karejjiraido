import React, { useRef } from "react";
import { Form } from "@unform/web";
import { Link } from "react-router-dom";
import * as Yup from "yup";

import "./styles.css";
import Logo from "../../assets/Logo.svg";
import RegisterIcon from "../../assets/Register.svg";
import Input from "../../components/Form/Input";
import Select from "../../components/Form/Select";

export default function Register() {
  const formRef = useRef(null);

  async function handleSubmit(data, { reset }) {
    try {
      const schema = Yup.object().shape({
        name: Yup.string()
          .min(3, "Digite um nome válido")
          .required("Nome é obrigatório"),
        telephone: Yup.number()
          .typeError("É preciso digitar um número")
          .min(9, "Digite um telefone válido")
          .required("Digite um telefone"),
        cnh: Yup.mixed().notRequired(),
        campus: Yup.string()
          .min(3, "aa")
          .required("Selecione um campus"),
        email: Yup.string()
          .email("Digite um email válido")
          .required("Email é obrigatório"),
        cpf: Yup.number()
          .typeError("É preciso digitar um CPF")
          .min(11, "Digite um CPF válido")
          .required("Digite um CPF"),
        ra: Yup.string().required("Envie uma foto de RA")
      });

      await schema.validate(data, {
        abortEarly: false
      });

      //send to API
      console.log(data);
      formRef.current.setErrors({});
      reset();
    } catch (err) {
      if (err instanceof Yup.ValidationError) {
        console.log(err);

        const errorMessages = {};

        err.inner.forEach(error => {
          errorMessages[error.path] = error.message;
        });

        formRef.current.setErrors(errorMessages);
      }
    }
  }

  return (
    <>
      <div className="register">
        <Link to="/" className="header__link">
          <img className="img-fluid header__logo" src={Logo} alt="uLift Logo" />
          <span className="header__title">uLift</span>
        </Link>
      </div>

      <section className="register__form">
        <div className="register__header">
          <img
            className="img-fluid register__logo"
            src={RegisterIcon}
            alt="Icone de Registro"
          />
          <h2 className="register__title">cadastre-se</h2>
        </div>

        <Form ref={formRef} onSubmit={handleSubmit} className="form">
          <div className="form__content">
            <div className="form__section form__section--right">
              <div className="form__inputgroup">
                <label className="form__label">Nome:</label>
                <Input
                  name="name"
                  className=" input__register"
                  placeholder="Digite seu nome"
                  type="text"
                />
              </div>
              <div className="form__inputgroup">
                <label className="form__label">Telefone:</label>
                <Input
                  name="telephone"
                  className=" input__register"
                  placeholder="Digite seu telefone"
                  type="number"
                />
              </div>
              <div className="form__inputgroup">
                <label className="form__label">CNH:</label>
                <Input
                  name="cnh"
                  className="input__register"
                  type="file"
                  multiple={false}
                />
              </div>
              <div className="form__inputgroup">
                <label className="form__label">Campus:</label>
                <Select className="form__select" name="campus" />
              </div>
            </div>
            <div className="form__section form__section--left">
              <div className="form__inputgroup">
                <label className="form__label">Email:</label>
                <Input
                  name="email"
                  className=" input__register"
                  placeholder="Digite seu email"
                  type="email"
                />
              </div>
              <div className="form__inputgroup">
                <label className="form__label">CPF:</label>
                <Input
                  name="cpf"
                  className=" input__register"
                  placeholder="Digite seu cpf"
                  type="number"
                />
              </div>
              <div className="form__inputgroup">
                <label className="form__label">Foto RA:</label>
                <Input
                  name="ra"
                  className="input__register"
                  type="file"
                  multiple={false}
                />
              </div>
            </div>
          </div>
          <div className="form__content--btn">
            <button className="form__button" type="submit">
              Cadastrar
            </button>
          </div>
        </Form>
      </section>
    </>
  );
}
