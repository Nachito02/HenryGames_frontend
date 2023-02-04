import React from 'react'
import styles from "./Alerta.module.css";

const Alerta = (props) => {
  return (
    <div className={ `${styles.alerta}  ${ !props.danger && styles.alerta_true} ` }>
        {props.message}
    </div>
  )
}

export default Alerta