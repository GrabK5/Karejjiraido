import React from "react";
import Lottie from "react-lottie";

import "./styles.css";
import Animation from "../../assets/404.json";
import Header from "../../components/Header";

export default function NotFound() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: Animation
  };

  const size = "50%";

  return (
    <>
      <Header />
      <div className="container-fluid">
        <h1 className="text-center mt-5 mb-5">Página não encontrada</h1>

        <Lottie options={defaultOptions} width={size} height={size} />
      </div>
    </>
  );
}
