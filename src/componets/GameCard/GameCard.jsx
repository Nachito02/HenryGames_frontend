import React from 'react'
import styles from './GameCard.module.css'
import {Link} from 'react-router-dom'
const GameCard = (props) => {

    const {name, background_image,id} = props
     

  return (
    <div className={styles.contenedor}>
        <Link to={`/game/${id}`}>
       <div className={styles.contenedorImg}>
       <img src={background_image} width='380px' alt="" />
       </div>
        <p className={styles.nombre}>{name}</p>
        </Link>
    </div>
  )
}

export default GameCard