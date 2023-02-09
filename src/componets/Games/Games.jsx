import React, {useState, useEffect} from 'react'
import { useSelector, useDispatch } from "react-redux";
import styles from './Games.module.css'
import SearchBar from '../SearchBar/SearchBar';
import Pagination from '../Pagination/Pagination';
import { getGenresAction,filterByGenresAction,orderByAction, resetAction, orderByRatingAction, orderByBdAction,resetAlertAction,getGamesAction, setAlerta } from "../../redux/actions";
import Alerta from '../Alerta/Alerta';
import Spinner from '../Spinner/Spinner';

const Games = () => {
  const dispatch = useDispatch()

    const [gameState, setGameState] = useState([])
  const [currentPage, setCurrentPage] = useState(1);
  const [isStateSet, setIsStateSet] = useState(false)

  const [filtrados, setFiltrados] = useState([])

  const games = useSelector(state => state.games)
  const genres = useSelector(state => state.genres)
  const filteredGames = useSelector((state) => state.filteredGames);
  const alerta = useSelector((state) => state.alerta);
   useEffect(() => {
    const getGenre = () => dispatch(getGenresAction())
    getGenre()
  },[dispatch])
  useEffect(() => {
    //consultar api
    const loadGames = () => dispatch(getGamesAction()) 
    loadGames()
   },[dispatch])

  useEffect(() => {
    if (!isStateSet && games.length !== 0) {
        setGameState(games)
        setIsStateSet(true)
    }
}, [games, isStateSet])

  useEffect(() => {
    
      if(alerta) {
        dispatch(resetAction(gameState))
      }

  }, [alerta, dispatch, gameState])

   const handleChange = async (event) => { 
    
      if(event.target.value === 'all') {
        dispatch(resetAction(gameState))
      }
   
    const gamesfilter = games.filter(game => game.genres.some( genre  => genre.name === event.target.value))
        if(gamesfilter.length === 0) {
          setAlerta('No se encontraron juegos con el filtro seleccionado')
        } else {
          setFiltrados(gamesfilter)
          dispatch(filterByGenresAction(gamesfilter)) 
          setCurrentPage(1)
        }
     
    }


    const handleChangeOrder =  (event) => { 

        if(event.target.value === 'desc') {
            if(filteredGames.length === 0) {
              const gamesfilter = [...games].sort((a,b)=> b.name.localeCompare(a.name) )

              dispatch(orderByAction(gamesfilter))
            } else {
              const gamesfilter = [...filteredGames].sort((a,b)=> b.name.localeCompare(a.name) )
              dispatch(orderByAction(gamesfilter))
            }
          } 
          if(event.target.value === 'asc') {
            if(filteredGames.length === 0) {

            const gamesfilter = [...games].sort((a,b)=> a.name.localeCompare(b.name) )
              dispatch(orderByAction(gamesfilter)) 
            }else {
              const gamesfilter = [...filteredGames].sort((a,b)=> a.name.localeCompare(b.name) )
              dispatch(orderByAction(gamesfilter))
            }
            } 
      }

      const handleChangeOrderRating =  (event) => { 

        if(event.target.value === 'desc') {
            if(filteredGames.length === 0) {
              const gamesfilter = [...games].sort((a,b)=> a.rating - b.rating )
              dispatch(orderByRatingAction(gamesfilter))
            } else {
              const gamesfilter = [...filteredGames].sort((a,b)=> a.rating - b.rating )
              dispatch(orderByRatingAction(gamesfilter))
            }
          } 

          if(event.target.value === 'asc') {
            if(filteredGames.length === 0) {
              const gamesfilter = [...games].sort((a,b)=>b.rating - a.rating )
              dispatch(orderByRatingAction(gamesfilter))
            } else {
              const gamesfilter = [...filteredGames].sort((a,b)=> b.rating - a.rating )
              dispatch(orderByRatingAction(gamesfilter))
            }
            } 
      }

    const handleReset =  (e) => {  
     e.preventDefault()
      dispatch(resetAction(gameState))
      dispatch(resetAlertAction(false))
      setCurrentPage(1)
    }

    const filterDB = (e) => {
      
      if(e.target.value === 'all') {
        dispatch(resetAction(gameState))
      }

      if(e.target.value === 'db') {
        if(filtrados.length === 0) {
          dispatch(orderByBdAction(gameState,'db'))
        } else {
          dispatch(orderByBdAction(filtrados,'db'))
        }
          }

          if(e.target.value === 'api') {
            
              if(filtrados.length === 0) {
                dispatch(orderByBdAction(gameState,'api'))
              } else {
                dispatch(orderByBdAction(filtrados,'api'))
              }
      }
    }
   return (
    <div>
        <div>
            <SearchBar />
              <div>
                  <form action="" className={styles.form}>
                   
                   <div className={styles.select}>
                   <label htmlFor="">Filtrar Por genero</label>
                    <select name="" id=""  onChange={handleChange}>
                        <option value="all">Mostrar todos</option>
                        {genres.map(e => 
                          <option key={e.id} value={e.name} >{e.name}</option>
                        )}
                    </select>
                   </div>

                   <div className={styles.select}>

                          <label htmlFor="">Ordenar Por orden alfabetico</label>
                         <select name="" id="" onChange={handleChangeOrder}>
                         <option value=''>Seleccionar</option>

                         <option value='asc'>Ascendente</option>
                          <option value="desc">Descendente</option>
                         </select>

                          </div>

                          <div className={styles.select}>

                         <label htmlFor="">Ordenar Por Rating</label>
                         <select name="" id="" onChange={handleChangeOrderRating}>
                         <option value="asc">Mayor</option>
                          <option value="desc">Menor</option>
                         </select>
                         </div>

                         <div className={styles.select}>

                         <label htmlFor="">Creado por:</label>
                         <select name="" id="" onChange={filterDB}>
                          <option value="all">Mostrar todos</option>
                         <option value="api">API</option>
                          <option value="db">Base de datos</option>
                         </select>
                         </div>
                            <button onClick={handleReset}>RESET</button>
                  </form>
              </div>
              {alerta && <Alerta danger={true} message='No existe el juego con los filtros seleccionados' />}

                      {games.length === 0  ? ( <Spinner /> ) : (<Pagination currentPage={currentPage} setCurrentPage={setCurrentPage}  games={ filteredGames.length === 0 ? games : filteredGames} />) }

          
        </div>
       
    </div>

  )
}

export default Games
