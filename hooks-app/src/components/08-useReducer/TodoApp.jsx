import React, { useEffect, useReducer } from 'react';

import todoReducer from './todoReducer';
import useForm from '../../hooks/useForm';

import './styles.css';

const init = () => {
  return JSON.parse(localStorage.getItem('todos')) || [];
};

const TodoApp = () => {
  const [todos, dispatch] = useReducer(todoReducer, [], init);

  const [{ description }, handleInputChange, reset] = useForm({
    description: '',
  });

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const handleDelete = (todoId) => {
    // console.log(todoId);

    // Crear la action
    const action = {
      type: 'delete',
      payload: todoId,
    };

    // dispatch
    dispatch(action);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (description.trim().length <= 1) return;

    const newTodo = {
      id: new Date().getTime(),
      desc: description,
      done: false,
    };

    const action = {
      type: 'add',
      payload: newTodo,
    };

    // ? El dispatch es una funcion que se le envia una accion al reducer
    // * cuando cambia el state el dispatch redibuja el cambio

    dispatch(action);

    reset();
  };

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

                  <button
                    className='btn btn-danger'
                    onClick={() => handleDelete(id)}
                  >
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

          <form onSubmit={handleSubmit}>
            <input
              type='text'
              name='description'
              placeholder='Aprender...'
              autoComplete='off'
              className='form-control'
              value={description}
              onChange={handleInputChange}
            />

            <button
              type='submit'
              className='btn btn-outline-primary mt-2 btn-block'
            >
              Agregar
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default TodoApp;
