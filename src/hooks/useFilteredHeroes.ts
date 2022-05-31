import { useDispatch, useSelector } from 'react-redux';
import {setActiveFilter} from '../actions'

export const useFilteredHeroes = () => {
  const { heroes, activeFilter }:any = useSelector((state) => state);
  const dispatch = useDispatch()
  const handleActiveFilter = (item : any) => {
     dispatch(setActiveFilter(item)); 
    };
    
  const filtered = heroes.filter((hero: any ) => activeFilter === 'all' ? hero : hero.element === activeFilter);
  console.log('filtered', filtered);

  return { filtered, handleActiveFilter };
};
