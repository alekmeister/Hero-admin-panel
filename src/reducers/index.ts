 interface IinitialState {
   heroes: object[]
   heroesLoadingStatus: string
   filters: string[]
   activeFilter: string
 }


const initialState: IinitialState = {
    heroes: [],
    heroesLoadingStatus: 'idle',
    filters: [],
    activeFilter: ''
}



const reducer = (state = initialState, action: any) => {
    switch (action.type) {
      case 'HEROES_FETCHING':
        return {
          ...state,
          heroesLoadingStatus: 'loading',
        };
      case 'HEROES_FETCHED':
        return {
          ...state,
          heroes: action.payload,
          heroesLoadingStatus: 'idle',
        };
      case 'HEROES_FETCHING_ERROR':
        return {
          ...state,
          heroesLoadingStatus: 'error',
        };
      case 'DELETE_CHAR':
        return {
          ...state,
          heroes: state.heroes.filter(
            (item : any) => item.id !== action.payload
          ),
        };
      case 'ADD_CHAR':   
        return {
          ...state, 
          heroes: [...state.heroes, action.payload]
        };
      case 'FILTERS_ARRAY':
        return {
          ...state,
          filters: [...action.payload],
          activeFilter: action.payload[0]
        };
      case 'ACTIVE_FILTER': 
        return {
          ...state,
          activeFilter: action.payload
        }

      default:
        return state;
    }
}

export default reducer;
