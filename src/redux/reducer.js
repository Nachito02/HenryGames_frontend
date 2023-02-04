import { GET_GAMES, GET_GAME, ADD_GAME,GET_GENRES, GET_GAME_ERROR, ADD_GAME_ERROR,FILTER_BY_GENRE, ORDER_BY } from "./types"

const initalState = {
    games: [],
    findGame: [],
    genres: [],
    alerta: null,
    filteredGames: []
}


const rootReducer = (state = initalState, action) => {

    switch(action.type) {


            case GET_GAMES:
                return {
                    ...state,
                    games: action.payload
                }
                case ADD_GAME_ERROR:
                case GET_GAME_ERROR:    
                    return {
                        ...state, alerta:action.payload
                    }

                case GET_GAME:
                    return {
                        ...state,
                        findGame: action.payload
                    }

                    case ADD_GAME:
                        return{
                            ...state, games: [state.games, action.payload]
                        }

                        case GET_GENRES: 
                        return{
                            ...state, genres: action.payload 
                        } 

                       
                        case FILTER_BY_GENRE : 
                        return {
                            ...state, filteredGames:action.payload,
                           
                        }

                        case ORDER_BY:
                            return {
                                ...state, games:action.payload
                            }

        default:
            return {
                ...state
            }
    }

}

export default rootReducer