import React, { useRef, useState } from "react";
import { Form } from "@unform/web";
import { Link } from "react-router-dom";

import "./styles.css";
import Header from "../../components/Header";
import InputGroup from "../../components/Form/InputGroup";
import io from 'socket.io-client';

export default function Chat() {
const socket = io(window.location.hostname+":4000");
const [users, setUsers] = useState([]);

const formRef = useRef(null);

async function login(data){
  socket.emit("login", data.name, (callback) =>{
    console.log(callback)
  })
}
socket.on("user_update", (dados)=> {
	setUsers(dados);
	console.log(dados);
})
  return (
    <>
      <Header />
      <div className="container-fluid">
      <Form ref={formRef} onSubmit={login} className="form">
          <div className="form__content">
            <div className="form__section form__section--right">
              <InputGroup
                name="name"
                label="Nome"
                placeholder="Digite seu nome"
                type="text"
              />    
            </div>
          </div>
      </Form>
      </div>
	  <div id='lista'>
    {users.map(id => (
       <li key={id}>{id}</li>
    ))}
	  </div>
    </>
  );
}
