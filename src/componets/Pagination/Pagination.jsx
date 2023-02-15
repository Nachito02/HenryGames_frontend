
import React, { useState } from 'react';
import GameCard from '../GameCard/GameCard';
import styles from './Pagination.module.css'




const Pagination = ({ games, currentPage, setCurrentPage }) => {



    // defindo un estado que me muestre solo 15 juegos por pagina
  const [gamesPerPage] = useState(15);


    // creo una constante que me va a guardar el ultimo indice del elemento, por ejempo si estoy en pagina 1 * 15 = 15, 2*15 = 30
  const indexOfLastGame = currentPage * gamesPerPage; // 1  /30 

  //creo una constaante que me traiga el primer indice de la paginacion actual y que me lo reste por el numero de elementos por pagina
  //por ejemplo, 15 - 15 = 1,    30-15 = 15
  const indexOfFirstGame = indexOfLastGame - gamesPerPage; // 15 - 15

  // creo un nuevo arreglo que me va a traer los elementos que son requeridos usando las constantes anteriores
  const currentGames = games.slice(indexOfFirstGame, indexOfLastGame);

  // Cambiar de pagina y setear el nuevo indice para el slice
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div>
          <nav className={styles.nav}>
            {/* voy  a crear los botones de la paginacion usando Math ceil para que redondee y no me cree botones como 4.3,
                      hace la suma de games = 100 / gamesperpage = 15 === 6.666 con ceil 6
            */}

          <ul className='pagination'>
            {[...Array(Math.ceil(games.length / gamesPerPage)).keys()].map(i => (
              <li key={i} >
                    
                <button onClick={() => ( paginate(i + 1))} >
                  {i + 1}
                </button>
              </li>
            ))}
          </ul>
        </nav>
            <div className={styles.cards}>
      {currentGames.map((game, i) => (
        <GameCard name={game.name} id={game.id} key={i} background_image={game.background_image} />
      ))}
     </div>

     <nav className={styles.nav}>
        <ul className='pagination'>
          {[...Array(Math.ceil(games.length / gamesPerPage)).keys()].map(i => (
            <li key={i} className='page-item'>
              <button onClick={() => paginate(i + 1)} >
                {i + 1}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </div>

  
  );
};

export default Pagination;
