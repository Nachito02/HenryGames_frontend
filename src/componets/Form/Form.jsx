import React, { useState } from "react";
import styles from "./Form.module.css";
import { useSelector, useDispatch } from "react-redux";
import { addGameAction } from "../../redux/actions";
import Alerta from "../Alerta/Alerta";
import { setAlerta } from "../../redux/actions";
import { useHistory } from "react-router-dom";
import Spinner from "../Spinner/Spinner";
const Form = () => {

  const history = useHistory()
  const dispatch = useDispatch()

  const [cargando, setCargando] = useState(false)
  const genres = useSelector(state => state.genres)
  const alerta = useSelector(state => state.alerta)

  const [message, setMessage] = useState({
    message :'',
    danger: ''
  })

  const [inputs, setInputs] = useState({
    name: "",
    released: "",
    rating: "",
    platforms: [],
    background_image: "",
    description: "",
    genres: []
  });

  const handleSubmit = (e) => {
   
    e.preventDefault()
    
    if([inputs.name, inputs.released,inputs.rating,inputs.platforms,inputs.background_image,inputs.description].includes("") || inputs.platforms.length === 0 ) {
      dispatch(setAlerta(true, 'Hubo un error al crear el juego'))


      setMessage({
        message: 'Todos los campos son obligatorios',
        danger: true
      })


      setTimeout(() => {
        dispatch(setAlerta(false))
      }, 5000)
    return
    } else {
      //añadir a la bd

      setCargando(true)
      const addGame = () => dispatch(addGameAction(inputs))
      
      addGame()
      dispatch(setAlerta(true))

      setMessage({
        message: 'Agregado Correctamente, seras redireccionado a la pagina principal',
        danger: false
      })

      setInputs({
        name: "",
        released: "",
        rating: "",
        platforms: [],
        background_image: "",
        description: "",
        genres: []
      })

    }

    setTimeout(() => {
      dispatch(setAlerta(false))
        history.push('/exito')
    }, 3000)

  };

  const handleChange = (e) => {
    console.log(inputs.released)
    const updateInputs = { ...inputs };
    
    if (e.target.checked) {
      if (e.target.name === 'genres') {
       
        updateInputs.genres = [...updateInputs.genres, e.target.value];
      } else if (e.target.name === 'platforms') {
        
        updateInputs.platforms = [...updateInputs.platforms, e.target.value];
      }
    } else {
      if (e.target.name === 'genres') {
        updateInputs.genres = updateInputs.genres.filter(
          (value) => value !== e.target.value
        );
      } else if (e.target.name === 'platforms') {
        updateInputs.platforms = updateInputs.platforms.filter(
          (value) => value !== e.target.value
        );
      } else {
        updateInputs[e.target.name] = e.target.value;
      }
    }

    setInputs(updateInputs);
  };

  return (
     
    cargando === true ?(  <Spinner /> ) : (
      <div className={styles.contenedor}>
      
      {alerta && <Alerta message={message?.message} danger={message?.danger}/> }
      <form onSubmit={handleSubmit} autoComplete="off">
        <div className={styles.inputBox}>
          <input
            onChange={handleChange}
            type="text"
            name="name"
            placeholder="Nombre"
          />
        </div>

        <div className={styles.inputBox}>
          <input
            type="date"
            name="released"
            placeholder="Fecha de lanzamiento"

            onChange={handleChange}
          />
        </div>

        <div className={styles.inputBox}>
          <input
            type="number"
            name="rating"
            placeholder="Rating"
            onChange={handleChange}
        min="1"
        max="5"
          />
        </div>

        <div className={styles.inputBox}>
            <p>Plataformas</p>
          <div className={styles.check}>
          <div className={styles.flex_col}>
              <label htmlFor="">PlayStation 5</label>
              <input
                type="checkbox"
                name="platforms"
                value="PlayStation 5"
                onChange={handleChange}
                
              />
            </div>

            <div className={styles.flex_col}>

              <label htmlFor="">PlayStation 4</label>
              <input
                type="checkbox"
                name="platforms"
                value="PlayStation 4"
                onChange={handleChange}
              />
            </div>

            <div className={styles.flex_col}>

              <label htmlFor="">PlayStation 3</label>
              <input
                type="checkbox"
                name="platforms"
                onChange={handleChange}
                value="PlayStation 3"
              />
            </div>

            <div className={styles.flex_col}>

              <label htmlFor="">Xbox Series S/X</label>
              <input
                type="checkbox"
                name="platforms"
                onChange={handleChange}
                value="Xbox Series S/X"
              />
            </div>

            <div className={styles.flex_col}>

              <label htmlFor="">Xbox 360</label>
              <input
                type="checkbox"
                name="platforms"
                onChange={handleChange}
                value="Xbox 360"
              />
            </div>

            <div className={styles.flex_col}>

              <label htmlFor="">Xbox One</label>
              <input
                type="checkbox"
                name="platforms"
                onChange={handleChange}
                value="Xbox 360"
              />
            </div>

            <div className={styles.flex_col}>
              <label htmlFor="">PC</label>
              <input
                type="checkbox"
                name="platforms"
                onChange={handleChange}
                value="pc"
              />
            </div>
          </div>
        </div>

        <div className={styles.inputBox}>
          <input
            type="text"
            name="background_image"
            placeholder="background_image"
            onChange={handleChange}
          />
        </div>

        <div className={styles.inputBox}>
          <textarea
            type="text"
            name="description"
            placeholder="Descripcion"
            onChange={handleChange}
          />
        </div>

        <div className={styles.check}>
            { genres.length > 0 &&  genres.map((e,i) => (
              <div key={i} className={styles.flex_col}>
              <label htmlFor="">{e.name}</label>
              <input
                type="checkbox"
                name="genres"
                value={e.name}
                onChange={handleChange}
              />
            </div>
            ))}
            </div>

        <div className={styles.contenedorButton}>
          <button type="submit" className={styles.button}>
            {" "}
            Añadir Juego
          </button>
        </div>
      </form>
    </div>
    ) 
    
  );
};

export default Form;
