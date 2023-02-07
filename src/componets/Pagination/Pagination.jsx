
import React, { useState } from 'react';
import GameCard from '../GameCard/GameCard';
import styles from './Pagination.module.css'


//@ai write las lineas de este codigo


const Pagination = ({ games, currentPage, setCurrentPage }) => {


  const [gamesPerPage] = useState(15);

  // Get current games
  const indexOfLastGame = currentPage * gamesPerPage; // 1  /30 
  const indexOfFirstGame = indexOfLastGame - gamesPerPage; // 15 - 15
  const currentGames = games.slice(indexOfFirstGame, indexOfLastGame);

  // Cambiar de pagina
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div>
         <nav className={styles.nav}>
        <ul className='pagination'>
          {[...Array(Math.ceil(games.length / gamesPerPage)).keys()].map(i => (
            <li key={i} >
              <button onClick={() => paginate(i + 1)} >
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
