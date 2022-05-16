import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunk from "redux-thunk";
import { reducerPeliculas } from "../reducers/reducerPeliculas";
import { reducerProfile } from "../reducers/reducerProfile";

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;
const reducers = combineReducers({
    user: reducerProfile,
    filmsStore: reducerPeliculas

})
export const store = createStore(
    reducers,
    composeEnhancers(applyMiddleware(thunk))
)