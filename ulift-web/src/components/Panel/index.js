import React, { useState } from 'react';
import Switch from "react-switch";

import rideImg from '../../assets/ride.svg';
import clockImg from '../../assets/clock.svg';
import './styles.css';

function Panel() {
  const [switchState, setSwitchState] = useState(false);
  const [selectValue, setSelectValue] = useState('');
  
  const campus = [
    { value: "aimores", label: "Aimorés" },
    { value: "contagem", label: "Contagem" },
    { value: "cristiano-machado", label: "Cristiano Machado" },
    { value: "barreiro", label: "Barreiro" },
    { value: "betim", label: "Betim" },
    { value: "guajajaras", label: "Guajajaras" },
    { value: "joao-pinheiro", label: "João Pinheiro" },
    { value: "liberdade", label: "Liberdade" },
    { value: "guajajaras", label: "Linha Verde" }
];

  function handleChangeSwitch() {
    setSwitchState(!switchState);
    // fazer requisição a API
  }

  return (
    <>
      <div className="panel p-3 border rounded">
        <section className="d-flex align-items-center justify-content-around">
          <img className="img-fluid" src={rideImg} alt="Icon Ride Driver"/>
          <h1>Oferecendo carona</h1>
          <Switch 
            checked={switchState} 
            onChange={handleChangeSwitch} 
            uncheckedIcon={false} 
            checkedIcon={false}
            onColor="#81C4F4"
            offHandleColor="#004D84"
            offColor="#ccc"
          />
        </section>

        <section className="d-flex mt-2 align-items-center">
          <img src={clockImg} alt="Clock Icon"/>
          <span className="ml-2">Marcar horário para carona</span>
        </section>

        <section className="mt-2">
          <select
            onChange={e => setSelectValue(e.target.value)}
            className="p-1 bg-transparent rounded border-dark w-100"
          >
            <option defaultValue>Selecione o campus de destino</option>
            {campus.map(el => (
              <option key={el.label} value={el.value}>{el.label}</option>
            ))}
          </select>
        </section>
      </div>
    </>
  );
}

export default Panel;