export const heroesFetching = () => {
    return {
        type: 'HEROES_FETCHING'
    }
}

export const heroesFetched = (heroes: Array<{}>) => {
    return {
        type: 'HEROES_FETCHED',
        payload: heroes
    }
}

export const heroesFetchingError = () => {
    return {
        type: 'HEROES_FETCHING_ERROR'
    }
}

export const deleteItem = (id: string) => {
  return {
    type: 'DELETE_CHAR',
    payload: id,
  };
}

export const addItem = (newHero: object) => {
    return {
        type: 'ADD_CHAR',
        payload: newHero
    }
}

export const skills = (filtersArr : string) => {
    return {
      type: 'FILTERS_ARRAY',
      payload: filtersArr
    };
}

export const setActiveFilter = (item : string) => {
  return {
    type: 'ACTIVE_FILTER',
    payload: item,
  };
};
