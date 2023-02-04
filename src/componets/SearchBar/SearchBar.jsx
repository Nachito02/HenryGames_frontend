import React from 'react'
import styles from './SearchBar.module.css'

const SearchBar = () => {
  return (
    <div className={styles.contenedor}>
       <form className={styles.inputbox}>
       <input className={styles.input} type="text" placeholder='busca tu juego' />

            <button className={styles.button} type="submit">
               
            </button>
       </form>
    </div>
  )
}

export default SearchBar