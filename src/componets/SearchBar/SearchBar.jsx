import React, { useState } from 'react'
import styles from './SearchBar.module.css'
import { searchGameAction } from '../../redux/actions'
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from 'react-router-dom';
const SearchBar = () => {

  const location = useHistory();
  const [input,setInput] = useState('')
  
  const dispatch = useDispatch()


    const handleClick = e => {
       e.preventDefault()
       if(input === '') {
        return
       }
          dispatch(searchGameAction(input))
          
    }

    const handleChange = e => {
      setInput(e.target.value)
    } 


  return (
    <div className={styles.contenedor}>
       <form className={styles.inputbox}>
       <input className={styles.input} type="text" onChange={handleChange} placeholder='busca tu juego' />

            <button className={styles.button} onClick={handleClick} type="submit">
               
            </button>
       </form>
    </div>
  )
}

export default SearchBar