import React, { useRef } from "react";
import { Form } from "@unform/web";
import { Link } from "react-router-dom";
import * as Yup from "yup";

import "./styles.css";
import Logo from "../../assets/Logo.svg";
import RegisterIcon from "../../assets/Register.svg";
import InputGroup from "../../components/Form/InputGroup";

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
        ra: Yup.string().required("Envie uma foto de RA"),
        password: Yup.string()
          .required("A senha é obrigatória")
          .matches(new RegExp(/[A-Za-z0-9]/, "g"), {
            message: "A senha deve conter somente letras ou números",
            excludeEmptyString: true
          }),
        passwordConfirm: Yup.string().required("Confirme sua senha")
      });

      if (data.passwordConfirm !== data.password) {
        formRef.current.setErrors({
          password: "Senhas não conferem",
          passwordConfirm: "Senhas não conferem"
        });
        return;
      }

      await schema.validate(data, {
        abortEarly: false
      });

      //send to API
      formRef.current.setErrors({});
      reset();
    } catch (err) {
      if (err instanceof Yup.ValidationError) {
        const errorMessages = {};

        err.inner.forEach(error => {
          errorMessages[error.path] = error.message;
        });

        formRef.current.setErrors(errorMessages);
      }
    }
  }

  return (
    <main className="register">
      <div className="register__header">
        <Link to="/" className="header__link">
          <img className="img-fluid header__logo" src={Logo} alt="uLift Logo" />
          <span className="header__title">uLift</span>
        </Link>
      </div>

      <section className="register__form">
        <div className="form__header">
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
              <InputGroup
                name="name"
                label="Nome"
                placeholder="Digite seu nome"
                type="text"
              />
              <InputGroup
                name="telephone"
                label="Telefone"
                placeholder="Digite seu telefone"
                type="number"
              />
              <InputGroup label="CNH" name="cnh" type="file" multiple={false} />
              <InputGroup
                name="password"
                label="Senha"
                placeholder="Digite sua senha"
                type="password"
              />
              <InputGroup
                label="Campus"
                name="campus"
                type="select"
                options={[
                  { value: "aimores", label: "Aimorés" },
                  { value: "contagem", label: "Contagem" },
                  { value: "cristiano-machado", label: "Cristiano Machado" },
                  { value: "barreiro", label: "Barreiro" },
                  { value: "betim", label: "Betim" },
                  { value: "guajajaras", label: "Guajajaras" },
                  { value: "joao-pinheiro", label: "João Pinheiro" },
                  { value: "liberdade", label: "Liberdade" },
                  { value: "guajajaras", label: "Linha Verde" }
                ]}
              />
            </div>
            <div className="form__section form__section--left">
              <InputGroup
                label="Email"
                name="email"
                placeholder="Digite seu email"
                type="email"
              />
              <InputGroup
                label="CPF"
                name="cpf"
                placeholder="Digite seu cpf"
                type="number"
              />
              <InputGroup
                label="Foto RA"
                name="ra"
                type="file"
                multiple={false}
              />
              <InputGroup
                name="passwordConfirm"
                label="Confirme a senha"
                placeholder="Digite sua senha novamente"
                type="password"
              />
            </div>
          </div>
          <div className="form__content--btn">
            <button className="form__button" type="submit">
              Cadastrar
            </button>
          </div>
        </Form>
      </section>
    </main>
  );
}
