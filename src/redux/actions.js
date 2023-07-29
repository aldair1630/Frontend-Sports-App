import axios from "axios";

export const GET_MATCHS_BY_COUNTRIES = "GET_MATCHS_BY_COUNTRIES";
export const GET_DOG_BY_NAME = "GET_DOG_BY_NAME";
export const GET_DOG_BY_ID = "GET_DOG_BY_ID";
export const GET_DOG_DETAILS = "GET_DOG_DETAILS";
export const DELETE_DOG = "DELETE_DOG";
export const GET_TEMPERAMENTS = "GET_TEMPERAMENTS";
export const ORDER = "ORDER";
export const LIFE_SORT = "LIFE_SORT";
export const FILTER_DOGS = "FILTER_DOGS";
export const FETCH_DOGS_REQUEST = "FETCH_DOGS_REQUEST";
export const FETCH_DOGS_SUCCESS = "FETCH_DOGS_SUCCESS";
export const FETCH_DOGS_FAILURE = "FETCH_DOGS_FAILURE";

//Funcion action creator para obtener todos los juegos
export const getMatchsByCountries = () => {
  //Funcion asincronica que hace peticion con axios a la ruta de mi servidor
  return async function (dispatch) {
    const apiMatchs = await axios.get("/football/countries"); //Peticion al servidor
    const matchs = apiMatchs.data; //Obtengo los datos del llmado en una variable
    dispatch({ type: GET_MATCHS_BY_COUNTRIES, payload: matchs }); //Despacho de la accion
  };
};

//Funcion action creator para obtener un juego por el id
export const getDogById = (idDog) => {
  return async function (dispatch) {
    const apiDogs = await axios.get(`/dogs/${idDog}`);
    const dog = apiDogs.data;
    dispatch({ type: GET_DOG_BY_ID, payload: dog });
  };
};

//Funcion action creator para obtener un juego por nombre
export const getDogByName = (name) => {
  return async function (dispatch) {
    const apiDogs = await axios.get(`/dogs?name=${name}`);
    const dog = apiDogs.data;
    dispatch({ type: GET_DOG_BY_NAME, payload: dog });
  };
};

//Funcion action creator para crear un juego
export const createDog = () => {};

export const getDogDetails = (idDog) => {
  return async function (dispatch) {
    const apiDogs = await axios.get(`/details/${idDog}`);
    const dog = apiDogs.data;
    dispatch({ type: GET_DOG_DETAILS, payload: dog });
  };
};

export const deleteDog = (idDog) => ({
  type: DELETE_DOG,
  payload: idDog,
});

export const getTemperaments = () => {
  //Funcion asincronica que hace peticion con axios a la ruta de mi servidor
  return async function (dispatch) {
    const allTemperaments = await axios.get("/temperaments"); //Peticion al servidor
    const temperaments = allTemperaments.data; //Obtengo los datos del llmado en una variable
    dispatch({ type: GET_TEMPERAMENTS, payload: temperaments }); //Despacho de la accion
  };
};

export const filteredDogs = (filter) => {
  return {
    type: FILTER_DOGS,
    payload: filter,
  };
};

export const orderByName = (payload) => {
  return {
    type: ORDER,
    payload,
  };
};

export const lifeSort = (payload) => {
  return {
    type: LIFE_SORT,
    payload,
  };
};

export const fetchDogsRequest = () => {
  return {
    type: FETCH_DOGS_REQUEST,
  };
};

export const fetchDogsSuccess = (dogs) => {
  return {
    type: FETCH_DOGS_SUCCESS,
    payload: dogs,
  };
};

export const fetchDogsFailure = (error) => {
  return {
    type: FETCH_DOGS_FAILURE,
    payload: error,
  };
};

export const fetchDogs = () => {
  return (dispatch) => {
    dispatch(fetchDogsRequest());
    axios
      .get("https://api.thedogapi.com/v1/breeds")
      .then((response) => {
        const dogs = response.data;
        dispatch(fetchDogsSuccess(dogs));
      })
      .catch((error) => {
        dispatch(fetchDogsFailure(error.message));
      });
  };
};
