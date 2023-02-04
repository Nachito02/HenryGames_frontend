import React, {useState, useEffect} from 'react'
import { useSelector, useDispatch } from "react-redux";
import { getGamesAction } from "../../redux/actions";
import GameCard from '../GameCard/GameCard';
import styles from './Games.module.css'
import SearchBar from '../SearchBar/SearchBar';
import Pagination from '../Pagination/Pagination';
import { getGenresAction,filterByGenresAction } from "../../redux/actions";

const Games = () => {
  const dispatch = useDispatch()




  useEffect(() => {
    //consultar api
    const loadGames = () => dispatch(getGamesAction()) 
    loadGames()
   },[dispatch])


   
  useEffect(() => {
    const getGenre = () => dispatch(getGenresAction())

    getGenre()

  },[dispatch])

   const games = useSelector(state => state.games)
   const genres = useSelector(state => state.genres)
   const filteredGames = useSelector((state) => state.filteredGames);

   const handeChange = async (event) => { 


    const gamesfilter = games.filter(game => game.genres.some( genre  => genre.name === event.target.value))
     dispatch(filterByGenresAction(gamesfilter)) 
 
    }
    
   return (
    <div>
        <div>
            <SearchBar />
              <div>
                  <form action="" className={styles.form}>
                   
                   <div className={styles.select}>
                   <label htmlFor="">Filtrar Por genero</label>
                    <select name="" id=""  onChange={handeChange}>
                        {genres.map(e => 
                          <option key={e.id} value={e.name} >{e.name}</option>
                        )}
                    </select>
                   </div>

                   <div className={styles.select}>

                          <label htmlFor="">Ordenar Por orden alfabetico</label>
                         <select name="" id="">
                         <option value="">Asendente</option>
                          <option value="">Desendente</option>
                         </select>

                          </div>

                          <div className={styles.select}>

                         <label htmlFor="">Ordenar Por Rating</label>
                         <select name="" id="">
                         <option value="">Mayor</option>
                          <option value="">Menor</option>
                         </select>
                         </div>

                  </form>
              </div>

              <Pagination games={filteredGames.length > 0 ? filteredGames : games} />

          
        </div>
       
    </div>

  )
}

export default Games
