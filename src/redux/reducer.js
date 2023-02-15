import {
  GET_GAMES,
  GET_GAME,
  ADD_GAME,
  GET_GENRES,
  GET_GAME_ERROR,
  ADD_GAME_ERROR,
  FILTER_BY_GENRE,
  ORDER_BY,
  RESET,
  ORDER_BY_RATING,
  FILTER_BY_BD,
  RESET_ALERTA,
  SEARCH_GAME,
  SET_ALERTA,
  DELETE_GAME
} from "./types";

const initalState = {
  games: [],
  findGame: [],
  genres: [],
  alerta: null,
  filteredGames: [],
  searchedGame: [],
  copyGames: []
};

const rootReducer = (state = initalState, action) => {
  switch (action.type) {


      case DELETE_GAME: 
      return {
        ...state, games : state.games.filter( (e) => e.id !== action.payload.id )
      }

    case GET_GAMES:
        return {
            ...state,
            games: action.payload,
            copyGames: action.payload
          }

          case SEARCH_GAME: 
          return {
            ...state, filteredGames:action.payload
          }

        case SET_ALERTA:
      case RESET_ALERTA: {
        return {...state, alerta: action.payload }
    }

    case ADD_GAME_ERROR:
    case GET_GAME_ERROR:
      return {
        ...state,
        alerta: action.payload,
      };

    case GET_GAME:
      return {
        ...state,
        findGame: action.payload,
      };

    case ADD_GAME:
      
      return {
        ...state,
        games: [ action.payload, ...state.games]
      };

    case GET_GENRES:
      return {
        ...state,
        genres: action.payload,
      };

    case FILTER_BY_GENRE:
      return {
        ...state,
        filteredGames: action.payload,
      };

    case ORDER_BY_RATING:
    case ORDER_BY:
      if (state.filteredGames.length === 0) {
        return {
          ...state,
          games: action.payload,
        };
      } else {
        return {
          ...state,
          filteredGames: action.payload,
        };
      }

    case RESET: {
      return {
        ...state,
        games: action.payload,
        filteredGames: [],
      };
    }

    case FILTER_BY_BD:
      if (action.orden === "db") {
        if (state.filteredGames.length === 0) {
          let filtrado = action.payload.filter((e) => e.id?.length > 7);
          if (filtrado.length !== 0) {
            return {
              ...state,
              games: action.payload.filter((e) => e.id?.length > 7),
            };
          } else {
            
            return {
              ...state,
              games:state.copyGames,
              alerta: "No existe el video juego con los datos seleccionados",
            };
          }
        } else {
          let filtrado = action.payload.filter((e) => e.id?.length > 7);
          if (filtrado.length !== 0) {
            return {
              ...state,
              filteredGames: action.payload.filter((e) => e.id?.length > 7),
            };
          } else {
            return {
              ...state,
              games:state.copyGames,
              alerta: "No existe el video juego con los datos seleccionados",
            };
          }
        }
      }

      if (action.orden === "api") {
        if (state.filteredGames.length === 0) {
          return {
            ...state,
            games: action.payload.filter(
              (e) => e.id?.toLocaleString().length < 7
            ),
          };
        } else {
          return {
            ...state,
            filteredGames: action.payload.filter(
              (e) => e.id?.toLocaleString().length < 7
            ),
          };
        }
      }


        break;

    default:
      return {
        ...state,
      };
  } 
  
};

export default rootReducer;
