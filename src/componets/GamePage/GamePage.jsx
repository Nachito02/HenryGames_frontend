import React, { useEffect } from "react";

import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getGameAction } from "../../redux/actions";
import styles from "./GamePage.module.css";
import { Link } from "react-router-dom";
import Alerta from "../Alerta/Alerta";
const GamePage = (props) => {
  const dispatch = useDispatch();
  const { id } = useParams();
  useEffect(() => {
    const getGame = () => dispatch(getGameAction(id));

    getGame();
  }, [dispatch, id]);

  const game = useSelector((state) => state.findGame);
  const alerta = useSelector((state) => state.alerta);


 

  return game?.id === parseInt(id) ? (
    <div>
    
      <div className={styles.contenedor}>
        <div className={styles.parallax}>
          <img className={styles.bg} src={game.background_image} alt="" />
        </div>
      </div>

      <div className={styles.main}>
        <div className={styles.img}>
          <img src={game.background_image} alt="" />
        </div>

        <div className={styles.info}>
          <p className={styles.name}>{game.name}</p>

          <div className={styles.platform}>
            {game?.platforms.map((e, i) => (
              <p key={i}> {e.platform.name}</p>
            ))}
          </div>

          <div className={styles.contenedorButton}>
            <Link to="" className={styles.button}>Visita la pagina web</Link>
          </div>
        </div>
      </div>

      <div className={styles.about}>
        <h1>Acerca del juego</h1>

        <div className={styles.contenedorAbout}>
          <p className={styles.description}>{game.description_raw}</p>

          <div className={styles.rating}>
              <div className={styles.ratingbox}>
              <div
              className={
                Math.round(game.rating) === 5
                  ? styles.rating_5
                  : Math.round(game.rating) === 4
                  ? styles.rating_4
                  : Math.round(game.rating) === 3
                  ? styles.rating_3
                  : Math.round(game.rating) === 2
                  ? styles.rating_2
                  : styles.rating_1
              }
            >
              {game.rating}
            </div>
            <span>Rating</span>


              </div>

                <div>
                  <p>Fecha de lanzamiento: {game.released} </p>
                </div>

                <div>
                  <p>Generos: {game.genres.map((e) => (" "+e.name))} </p>
                </div>

          </div>
        </div>
      </div>
    </div>
  ) : (
  alerta ? <Alerta message = 'Hubo un error al cargar el juego' danger={true} /> :
  'cargando...'
  );
};

export default GamePage;
