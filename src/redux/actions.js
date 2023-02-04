import { GET_GAMES, GET_GAME, ADD_GAME, GET_GENRES, GET_GAME_ERROR, ADD_GAME_ERROR, FILTER_BY_GENRE } from "./types";

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
            await clienteAxios.post('/api/videogasmes',game)
            dispatch(addGame(game))


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