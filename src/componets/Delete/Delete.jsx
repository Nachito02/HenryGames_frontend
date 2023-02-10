import React from 'react'
import styles from './Delete.module.css'

import { Link } from 'react-router-dom'

const Delete = () => {
  return (
    <div className={styles.container}>
        <h1>Juego eliminado correctamente</h1>

        <Link to='/games' className={styles.button}>Volver a juegos</Link>
    </div>
  )
}

export default Delete