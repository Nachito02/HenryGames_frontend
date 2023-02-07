import { GET_GAMES, GET_GAME, ADD_GAME, GET_GENRES, GET_GAME_ERROR, ADD_GAME_ERROR, FILTER_BY_GENRE, ORDER_BY, RESET, ORDER_BY_RATING, FILTER_BY_BD, RESET_ALERTA, SEARCH_GAME, SET_ALERTA } from "./types";

import clienteAxios from "../config/axios";

const getGames = (games) =>({
    type: GET_GAMES,
    payload : games
})

export function getGamesAction() {
    return async (dispatch) => {
        try {
            const respuesta = await clienteAxios.get('/api/videogames')

            dispatch(getGames(respuesta.data))

        } catch (error) {
            
            console.log(error.message)
        }
    }
}

export function getGameAction(id) {
    return async (dispatch) => {
        try {
            const respuesta= await clienteAxios.get(`/api/videogame/${id}`)
            dispatch(getGame(respuesta.data))
        } catch (error) {
            dispatch(getGameError(true))
        }
    }
}

const getGameError = (estado) =>({
    type: GET_GAME_ERROR,
    payload : estado
})

const getGame = (game) =>({
    type: GET_GAME,
    payload : game
})
    

export  function addGameAction(game) {
    return async (dispatch) => {
      
        try {
           const respuesta = await clienteAxios.post('/api/videogames',game)
             await  dispatch(addGame(respuesta.data))
        }
        catch(error) {
            dispatch(addGameError(true))
            console.log(error)
        }    

}
}

const addGameError = (estado) =>({
    type: ADD_GAME_ERROR,
    payload : estado
})
const addGame = (game) => ({
    type: ADD_GAME,
    payload :game
})


export  function getGenresAction() {
    return async (dispatch) => {
      
        try {
           const respuesta = await clienteAxios.get('/api/genres')
            dispatch(getGenres(respuesta.data))
        }
        catch(error) {
            console.log(error)
        }    }
}

const getGenres = (genres) => ({
    type: GET_GENRES,
    payload: genres
})


export function filterByGenresAction(gamesfilter) {
    return async (dispatch) => {
       await dispatch(filterByGenres(gamesfilter))
    }
}

const filterByGenres = (gamesfilter) => ({
    type: FILTER_BY_GENRE,
    payload: gamesfilter
})

export function orderByAction(games) {
    return async (dispatch) => {
       await dispatch(orderBy(games))
    }
}

const orderBy = (games) => ({
    type: ORDER_BY,
    payload: games
})



export function resetAction(games) {
    return async (dispatch) => {
       await dispatch(reset(games))
    }
}
const reset = (games) => ({
    type: RESET,
    payload: games
})



export function orderByRatingAction(games) {
    return async (dispatch) => {
       await dispatch(orderByRating(games))
    }
}

const orderByRating = (games) => ({
    type: ORDER_BY_RATING,
    payload: games
})


export function orderByBdAction(games,orden) {
    return async (dispatch) => {
       await dispatch(orderByBD(games,orden))
    }
}

const orderByBD = (games,orden) => ({
    type: FILTER_BY_BD,
    payload:games,
    orden : orden
})


export function resetAlertAction(value) {
    return async (dispatch) => {
       await dispatch({
        type :RESET_ALERTA,
        payload: value
       })
    }
}

export function searchGameAction(game) {
    return async (dispatch) => {
        try {
            const respuesta= await clienteAxios.get(`/api/videogame/search/${game}`)
            dispatch(searchGame(respuesta.data))
        } catch (error) {
            dispatch(getGameError(true))
        }
    }
}

const searchGame = game => ({
    type :SEARCH_GAME,
    payload: game
   })


   export function setAlerta(value) {
    return async (dispatch) => {
       await dispatch({
        type :SET_ALERTA,
        payload: value,

       })
    }
}