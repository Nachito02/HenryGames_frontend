import React from 'react'
import styles from './Exito.module.css'
import { Link } from 'react-router-dom'

const Exito = () => {
  return (
    <div className={styles.container}>
        <h1>Juego agregado correctamente</h1>

        <Link to='/games' className={styles.button}>Volver a juegos</Link>
    </div>
  )
}

export default Exito