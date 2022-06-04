
import {configureStore} from "@reduxjs/toolkit";
import heroesReducer from '../components/heroesList/heroesSlice'
// import reducer from "../reducers";
// const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

const store = configureStore({
        // reducer: reducer,
    reducer:heroesReducer,
        // devTools: process.env.NODE_ENV !== 'production',
        // middleware: getDefaultMiddleware => getDefaultMiddleware()
    })

export default store;
export type RootState = ReturnType<typeof store.getState> //нету типов RootState
export type AppDispatch = typeof store.dispatch //нету типов AppDispatch