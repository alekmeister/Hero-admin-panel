import {mappedSkils, Skills} from '../../constants';
import cn from 'classnames';
import { FC } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useFilteredHeroes } from '../../hooks/useFilteredHeroes';
import style from './HeroesFilters.module.scss';
import {useAppSelector} from "../../hooks/typesForHooks";


const mappedFilter: Skills  = {
  all: 'btn-outline-dark',
  fire: 'btn-danger',
  water: 'btn-primary',
  wind: 'btn-success',
  earth: 'btn-secondary',
};


const HeroesFilters: FC = () => {
  const { filters, activeFilter } = useAppSelector((state) => state);
  const { handleActiveFilter } = useFilteredHeroes();

  return (
    <div className="card shadow-lg mt-4">
      <div className="card-body">
        <p className="card-text">Отфильтруйте героев по элементам</p>
        <div className="btn-group">
          {filters.map((item) => (
            <button
              className={cn('btn', mappedFilter[item], {
                [style.active]: item === activeFilter,
              })}
              key={uuidv4()}
              onClick={() => handleActiveFilter(item)}
            >
              {mappedSkils[item]}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HeroesFilters;
