import React, { useEffect, useReducer } from 'react';

import todoReducer from './todoReducer';
import TodoList from './TodoList';
import TodoAdd from './TodoAdd';

import './styles.css';

const init = () => {
  return JSON.parse(localStorage.getItem('todos')) || [];
};

const TodoApp = () => {
  const [todos, dispatch] = useReducer(todoReducer, [], init);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const handleDelete = (todoId) => {
    // Crear la action
    const action = {
      type: 'delete',
      payload: todoId,
    };

    // ? El dispatch es una funcion que se le envia una accion al reducer
    // * cuando cambia el state el dispatch redibuja el cambio
    dispatch(action);
  };

  const handleToggle = (todoId) => {
    dispatch({
      type: 'toggle',
      payload: todoId,
    });
  };

  const handleAddTodo = (newTodo) => {
    dispatch({
      type: 'add',
      payload: newTodo,
    });
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
          <TodoAdd handleAddTodo={handleAddTodo} />
        </div>
      </div>
    </div>
  );
};

export default TodoApp;
