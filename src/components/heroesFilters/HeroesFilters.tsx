import { mappedSkils } from '../../constants';
import cn from 'classnames';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { useFilteredHeroes } from '../../hooks/useFilteredHeroes';
import style from './HeroesFilters.module.scss';
// Задача для этого компонента:
// Фильтры должны формироваться на основании загруженных данных
// Фильтры должны отображать только нужных героев при выборе
// Активный фильтр имеет класс active
// Изменять json-файл для удобства МОЖНО!
// Представьте, что вы попросили бэкенд-разработчика об этом

const mappedFilter : any = {
  all: 'btn-outline-dark',
  fire: 'btn-danger',
  water: 'btn-primary',
  wind: 'btn-success',
  earth: 'btn-secondary',
};

const HeroesFilters = () => {
  const { filters, activeFilter } : any = useSelector((state) => state);
  const [active, setActive] = useState(false);
  const { filtered, handleActiveFilter } = useFilteredHeroes();

  const handleActiveBtn = () => {
    setActive(!active);
  };

  return (
    <div className="card shadow-lg mt-4">
      <div className="card-body">
        <p className="card-text">Отфильтруйте героев по элементам</p>
        <div className="btn-group">
          {filters.map((item : any ) => (
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
