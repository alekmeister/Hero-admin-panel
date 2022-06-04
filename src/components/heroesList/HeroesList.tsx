import {useHttp} from '../../hooks/http.hook';
import {useEffect} from 'react';
import {useAppSelector} from "../../hooks/typesForHooks";
import {useAppDispatch} from "../../hooks/typesForHooks";
import {useFilteredHeroes} from '../../hooks/useFilteredHeroes';
import HeroesListItem from '../heroesListItem/HeroesListItem';
import Spinner from '../spinner/Spinner';
import {Hero, heroesFetched, heroesFetching, heroesFetchingError} from "./heroesSlice";
// Задача для этого компонента:
// При клике на "крестик" идет удаление персонажа из общего состояния
// Усложненная задача:
// Удаление идет и с json файла при помощи метода DELETE

  const HeroesList = () => {
  const { heroesLoadingStatus } = useAppSelector((state) => state);
  const { filtered } = useFilteredHeroes();
  const dispatch = useAppDispatch();
  const { request } = useHttp();


  useEffect(() => {}, [filtered]);

  useEffect(() => {
    dispatch(heroesFetching());
    request('http://localhost:3001/heroes')
      .then((data) => dispatch(heroesFetched(data)))

      .catch(() => dispatch(heroesFetchingError()));

    // eslint-disable-next-line
  }, []);

  if (heroesLoadingStatus === 'loading') {
    return <Spinner />;
  } else if (heroesLoadingStatus === 'error') {
    return <h5 className="text-center mt-5">Ошибка загрузки</h5>;
  }

  const renderHeroesList = (arr:Hero[])  => {

    if (!arr.length) {
      return <h5 className="text-center mt-5">Героев пока нет</h5>;
    }

    return arr.map((props) => {

      return <HeroesListItem key={props.id} {...props} />;
    });
  };
  const elements = renderHeroesList(filtered);
  return <ul>{elements}</ul>;
};

export default HeroesList;
