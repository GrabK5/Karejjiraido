import React from "react";
import Lottie from "react-lottie";

import "./styles.css";
import Header from "../../components/Header";
import InputGroup from "../../components/Form/InputGroup";

export default function Chat() {
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
        

        <Lottie options={defaultOptions} width={size} height={size} />
      </div>
    </>
  );
}
