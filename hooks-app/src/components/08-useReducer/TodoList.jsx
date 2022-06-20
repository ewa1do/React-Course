import React from 'react';

import TodoListItem from './TodoListItem';

const TodoList = ({ todos, handleDelete, handleToggle }) => {
  return (
    <ul className='list-group'>
      {todos.map((todo, index) => {
        return (
          <TodoListItem
            key={todo.id}
            index={index}
            todo={todo}
            handleDelete={handleDelete}
            handleToggle={handleToggle}
          />
        );
      })}
    </ul>
  );
};

export default TodoList;
