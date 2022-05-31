import {createSlice} from "@reduxjs/toolkit";
interface IInitialState {
    heroes: any,
    heroesLoadingStatus: string,
    filters: Array<string>,
    activeFilter: string
}

const initialState: IInitialState = {
    heroes: [],
    heroesLoadingStatus: 'idle',
    filters: [],
    activeFilter: ''
}
const heroesSlice = createSlice({
    name: 'heroes',
    initialState,
    reducers: {
        heroesFetching: state => {state.heroesLoadingStatus = 'loading'},
        heroesFetched: (state, action)  => {
            state.heroesLoadingStatus = 'idle';
            state.heroes = action.payload;
        },
        heroesFetchingError: state => {
            state.heroesLoadingStatus = 'error'
        },
        deleteItem: (state, action) => {
            state.heroes.filter(
                (item: any) => item.id !== action.payload
            )
        },
        addItem: (state, action) => {
            state.heroes = [...state.heroes, action.payload]
        }
    }
})

const {actions, reducer} = heroesSlice;
export default reducer;
export const {
    heroesFetching,
    heroesFetched,
    heroesFetchingError,
    deleteItem,
    addItem,
} = actions;