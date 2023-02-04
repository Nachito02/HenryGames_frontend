import React from "react";
import styles from "./CrearJuego.module.css";

import Form from "../Form/Form";

const CrearJuego = () => {
  return (<div className={styles.contenedor}>

                <div>
                <h1>Añade tu juego</h1>
                </div>

                <Form />

  </div>)
};

export default CrearJuego;
