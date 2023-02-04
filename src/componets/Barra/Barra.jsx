import React from 'react'
import {Link} from 'react-router-dom'
import styles from './Barra.module.css'
const Barra = () => {
  return (

   <div className={styles.container}>
     <div className={styles.logo}>
        <Link to='/'> Henry Games </Link>
    </div>

        <nav className={styles.nav}>
        <Link to='/'> Inicio </Link>
        <Link to='/games'> Juegos </Link>
        <Link to='/crearjuego'> Añade tu juego </Link>

        
        </nav>
   </div>
  )
}

export default Barra