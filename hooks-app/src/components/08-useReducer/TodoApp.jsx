import React, { useReducer } from 'react';

import todoReducer from './todoReducer';

import './styles.css';

const initialState = [
  {
    id: new Date().getTime(),
    desc: 'Aprender React',
    done: false,
  },
];

const TodoApp = () => {
  const [todos] = useReducer(todoReducer, initialState);

  console.log(todos);

  return (
    <div>
      <h1>
        TodoApp <small>({todos.length})</small>
      </h1>
      <hr />

      <div className='row'>
        <div className='col-7'>
          <ul className='list-group'>
            {todos.map(({ id, desc }, i) => {
              return (
                <li
                  key={id}
                  className='list-group-item'
                >
                  <p className='text-center'>
                    {i + 1}. {desc}
                  </p>

                  <button className='btn btn-danger'>
                    Borrar
                  </button>
                </li>
              );
            })}
          </ul>
        </div>

        <div className='col-5'>
          <h4>Agregar TODO</h4>
          <hr />

          <form>
            <input
              type='text'
              name='description'
              placeholder='Aprender...'
              autoComplete='off'
              className='form-control'
            />

            <button className='btn btn-outline-primary mt-2 btn-block'>
              Agregar
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default TodoApp;
