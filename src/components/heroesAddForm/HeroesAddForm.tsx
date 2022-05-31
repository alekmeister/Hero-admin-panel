import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { useHttp } from '../../hooks/http.hook';
import { addItem, skills } from '../../actions';
import { mappedSkils } from '../../constants'

interface newHero {
    id: string,
    name: string,
    description: string,
    element: string
}

const HeroesAddForm = (): JSX.Element => { //?
    const {filters}: any = useSelector(state => state)
    const [name, setName] = useState('')
    const [skill, setSkill] = useState('');
    const [oneSkill, setOneSkill] = useState('')
    const dispatch = useDispatch()
    const { request } = useHttp()
    

    const getOptions = async () => {
        const res = await request('http://localhost:3001/filters/');
        
        dispatch(skills(res)); 
    }
     useEffect(() => {
         getOptions(); 
     }, []);
     
   
    const handleChangeName = (event: any) => {
     setName(event.target.value)
    }
    const handleChangeSkill = (event: any) => {
     setSkill(event.target.value)
    }

    const handleChangeOneSkill = (event: any) => {
        setOneSkill(event.target.value)
    };
    const handleSubmitForm = (event: any) => {
        event.preventDefault();
        const newHero: newHero = {
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
          {filters.map((item: any) =>
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
