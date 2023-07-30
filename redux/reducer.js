// Importando las acciones
import {
  GET_MATCHS_BY_COUNTRIES,
  GET_DOG_DETAILS,
  GET_DOG_BY_ID,
  GET_DOG_BY_NAME,
  DELETE_DOG,
  GET_TEMPERAMENTS,
  FILTER_DOGS,
  ORDER,
  LIFE_SORT,
  FETCH_DOGS_REQUEST,
  FETCH_DOGS_SUCCESS,
  FETCH_DOGS_FAILURE,
} from "./actions";

// Iniciando los estados
const initialState = {
  allMatchs: [],
  matchsByCountries: [],
  dogDetails: {},
  temperaments: [],
};

// Configurando los reducers
const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_MATCHS_BY_COUNTRIES:
      return {
        ...state,
        allMatchs: action.payload,
        matchsByCountries: action.payload,
      };
    case GET_DOG_DETAILS:
      return {
        ...state,
        dogDetails: action.payload,
      };
    case GET_DOG_BY_ID:
      return {
        ...state,
        dogs: state.dogs.filter((dog) => dog.id !== action.payload),
      };
    case GET_DOG_BY_NAME:
      return {
        ...state,
        dogs: action.payload,
      };
    case DELETE_DOG:
      return {
        ...state,
        dogs: state.dogs.filter((dog) => dog.id !== action.payload),
      };
    case GET_TEMPERAMENTS:
      return {
        ...state,
        temperaments: action.payload,
      };
    case FILTER_DOGS:
      if (action.payload === "all") {
        // Si se selecciona "All Temperaments", mostrar todos los perros sin filtrar
        return {
          ...state,
          dogs: state.allMatchs,
        };
      }

      const filteredDogs = state.allMatchs.filter((dog) => {
        if (dog.temperament) {
          return dog.temperament
            .toLowerCase()
            .includes(action.payload.toLowerCase());
        } else {
          return false;
        }
      });

      return {
        ...state,
        dogs: filteredDogs,
      };
    case FETCH_DOGS_REQUEST:
      return {
        ...state,
        loading: true,
        error: "",
      };
    case FETCH_DOGS_SUCCESS:
      return {
        ...state,
        dogs: action.payload,
        loading: false,
      };
    case FETCH_DOGS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case ORDER:
      let sortedDogs = [...state.dogs]; // Crea una copia del estado dogs
      sortedDogs =
        action.payload === "ascendente"
          ? sortedDogs.sort(function (a, b) {
              // Utiliza sortedDogs en lugar de state.dogs
              if (a.name > b.name) {
                return 1;
              }
              if (b.name > a.name) {
                return -1;
              }
              return 0;
            })
          : sortedDogs.sort(function (a, b) {
              // Utiliza sortedDogs en lugar de state.dogs
              if (a.name > b.name) {
                return -1;
              }
              if (b.name > a.name) {
                return 1;
              }
              return 0;
            });
      return {
        ...state,
        dogs: sortedDogs,
      };
    case LIFE_SORT:
      let sortedDogsByLife = [...state.dogs]; // Crea una copia del estado dogs
      sortedDogsByLife =
        action.payload === "max"
          ? sortedDogsByLife.sort(function (a, b) {
              // Utiliza sortedDogsByLife en lugar de state.dogs
              if (a.life > b.life) {
                return 1;
              }
              if (b.life > a.life) {
                return -1;
              }
              return 0;
            })
          : sortedDogsByLife.sort(function (a, b) {
              // Utiliza sortedDogsByLife en lugar de state.dogs
              if (a.life > b.life) {
                return -1;
              }
              if (b.life > a.life) {
                return 1;
              }
              return 0;
            });
      return {
        ...state,
        dogs: sortedDogsByLife,
      };
    default:
      return { ...state };
  }
};

export default rootReducer;
