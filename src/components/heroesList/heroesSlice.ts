import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {Skills} from "../../constants";

export interface Hero {
    id: string,
    name: string,
    description: string,
    element: string
}

type filtersType = keyof Skills


interface IInitialState {
    heroes: Hero[]
    heroesLoadingStatus: string,
    filters: filtersType[],
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
        heroesFetching: state => {
            state.heroesLoadingStatus = 'loading'
        },
        heroesFetched: (state, action : PayloadAction<Hero[]>)  => {
            state.heroesLoadingStatus = 'idle';
            state.heroes = action.payload;
        },
        heroesFetchingError: state => {
            state.heroesLoadingStatus = 'error'
        },
        deleteItem: (state, action:PayloadAction<string>) => {
            state.heroes = state.heroes.filter((item)=>item.id !== action.payload)
        },
        addItem: (state, action: PayloadAction<Hero>) => {
            state.heroes = [...state.heroes, action.payload]
        },
        skills: ( state, action: PayloadAction<filtersType[]>) => {
            state.filters = [...action.payload];
            state.activeFilter = action.payload[0]
        },
        setActiveFilter: (state, action: PayloadAction<string>) => {
            state.activeFilter = action.payload
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
    skills,
    setActiveFilter
} = actions;

