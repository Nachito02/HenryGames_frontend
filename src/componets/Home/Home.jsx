import React from "react";
import styles from "./Home.module.css";
import {Link} from 'react-router-dom'

const Home = () => {

  return (
      <div className={styles.main}>
            <div className={styles.contenedor}>
      <div className={styles.homeText}>
        <h2>Bienvenidos a</h2>
        <h1>Henry Games</h1>
        <p className={styles.text}>
        Bienvenidos a nuestra biblioteca de juegos, un lugar donde encontrarás información detallada sobre una amplia selección de juegos para todas las edades y gustos. Nuestra página trae información actualizada sobre los juegos más interesantes directamente desde la API. Ya sea que busques juegos de acción, aventura, estrategia o cualquier otro género, aquí encontrarás todo lo que necesitas saber. Explora nuestra biblioteca, lee acerca de tus juegos favoritos y descubre nuevos títulos que podrían interesarte. ¡Empieza a descubrir la información de tus juegos favoritos ahora mismo!
        </p>
          <div className={styles.buttonContainer}>
        
              <Link to= '/games'>Empezar! </Link>
          
          </div>
      </div>

          {/* <div className={styles.image}>
          <img src="./static/img/icon.png" alt="" />
          </div> */}
    </div>
      </div>
  );
};

export default Home;
