import React from 'react'
import {Link} from 'react-router-dom'
import styles from './Barra.module.css'
import { useLocation } from 'react-router-dom'
const Barra = () => {
  const location = useLocation()

  return (

   <div className={styles.container}>
     <div className={styles.logo}>
        <Link to='/'> Henry Games </Link>
    </div>

        <nav className={styles.nav}>
        {location.pathname !== '/' ?  <Link to='/'> Inicio </Link> : null }
        <Link to='/games'> Juegos </Link>
        <Link to='/crearjuego'> Añade tu juego </Link>

        </nav>
   </div>
  )
}

export default Barra