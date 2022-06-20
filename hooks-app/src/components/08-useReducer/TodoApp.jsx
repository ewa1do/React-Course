import React, { useEffect, useReducer } from 'react';

import todoReducer from './todoReducer';
import TodoList from './TodoList';

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

  const handleToggle = (todoId) => {
    dispatch({
      type: 'toggle',
      payload: todoId,
    });
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
          <TodoList
            todos={todos}
            handleDelete={handleDelete}
            handleToggle={handleToggle}
          />
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
