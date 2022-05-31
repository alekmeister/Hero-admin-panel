
import {configureStore} from "@reduxjs/toolkit";
import heroes from '../components/heroesList/heroesSlice'
import reducer from "../reducers";
// const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

const store = configureStore(
    {reducer: reducer,
        devTools: process.env.NODE_ENV !== 'production',
        middleware: getDefaultMiddleware => getDefaultMiddleware()
    })
export default store;