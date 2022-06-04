import React, { useState, useEffect, FC } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useHttp } from '../../hooks/http.hook';
import {mappedSkils, Skills} from '../../constants'
import {useAppDispatch, useAppSelector} from "../../hooks/typesForHooks";
import {addItem, Hero, skills} from "../heroesList/heroesSlice";

const HeroesAddForm: FC = () => {
    const {filters} = useAppSelector(state => state)
    const [name, setName] = useState('')
    const [skill, setSkill] = useState('');
    const [oneSkill, setOneSkill] = useState('')
    const dispatch = useAppDispatch()
    const { request } = useHttp()
    

    const getOptions = async () => {
        const res:(keyof Skills)[] = await request('http://localhost:3001/filters/');
        
        dispatch(skills(res));
    }
     useEffect(() => {
         getOptions(); 
     }, []);
     
   
    const handleChangeName = (event: React.ChangeEvent<HTMLInputElement>) => {
     setName(event.target.value)
    }
    const handleChangeSkill = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
     setSkill(event.target.value)
    }

    const handleChangeOneSkill = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setOneSkill(event.target.value)
    };
    const handleSubmitForm = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        const newHero: Hero = {
          id: uuidv4(),
          name: name,
          description: skill,
          element: oneSkill,
        };
        request(`http://localhost:3001/heroes`, 'POST', {'Content-Type': 'application/json'}, JSON.stringify(newHero))
            .then(() => { dispatch(addItem(newHero)); })
        
    };

  return (
    <form className="border p-4 shadow-lg rounded">
      <div className="mb-3">
        <label htmlFor="name" className="form-label fs-4">
          Имя нового героя
        </label>
        <input
          required
          type="text"
          name="name"
          className="form-control"
          id="name"
          placeholder="Как меня зовут?"
          value={name}
          onChange={handleChangeName}
        />
      </div>

      <div className="mb-3">
        <label htmlFor="text" className="form-label fs-4">
          Описание
        </label>
        <textarea
          required
          name="text"
          className="form-control"
          id="text"
          placeholder="Что я умею?"
          style={{ height: '130px' }}
          value={skill}
          onChange={handleChangeSkill}
        />
      </div>

      <div className="mb-3">
        <label htmlFor="element" className="form-label">
          Выбрать элемент героя
        </label>
        <select
          required
          className="form-select"
          id="element"
          name="element"
          value={oneSkill}
          onChange={handleChangeOneSkill}
        >
          <option>Я владею элементом...</option>
          {filters.map((item) =>
            <option value={item} key={uuidv4()}>
              {mappedSkils[item]}
            </option>
          )}
        </select>
      </div>

      <button
        type="submit"
        className="btn btn-primary"
        onClick={handleSubmitForm}
      >
        Создать
      </button>
    </form>
  );
};

export default HeroesAddForm;
