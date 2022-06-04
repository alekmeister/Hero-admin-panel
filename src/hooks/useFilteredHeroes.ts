import {useAppDispatch, useAppSelector} from "./typesForHooks";
import {setActiveFilter} from "../components/heroesList/heroesSlice";

export const useFilteredHeroes = () => {
  const { heroes, activeFilter } = useAppSelector((state) => state);
  const dispatch = useAppDispatch()
  const handleActiveFilter = (item : string) => {
     dispatch(setActiveFilter(item)); 
    };
    
  const filtered = heroes.filter((hero) => activeFilter === 'all' ? hero : hero.element === activeFilter);


  return { filtered, handleActiveFilter };
};
