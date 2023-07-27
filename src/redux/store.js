import { createStore, applyMiddleware, compose } from "redux"; // Funciones destructuradas de redux para la creacion del store
import thunkMiddleware from "redux-thunk"; // Funcion asincronica de redux
import rootReducer from "./reducer"; //Importacion del reducer

// validacion para la extension devtools o la de redux
const composeEnhacer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

//Creacion del store con el reducer adentro, la validacion y la funcion asincronica "thunkMiddleware" y la funcion "applyMiddleware"
const store = createStore(
  rootReducer, //reducer
  composeEnhacer(applyMiddleware(thunkMiddleware)) //Funciones para la configuracion del store y para el manejo de datos asincronicos
);

//Exportacion del sore
export default store;
