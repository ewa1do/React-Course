const initialState = [
  {
    id: 1,
    todo: 'Comprar pan',
    done: false,
  },
];

// ? Un reducer es una funcion la cual tiene como parametros el state y la accion que va a realizar
// * Las acciones son las que modificaran el state
// * Esta funcion siempre tiene que retornar un state

const todoReducer = (state = initialState, action) => {
  if (action?.type === 'agregar') {
    return [...state, action.payload];
  }

  return state;
};

let todos = todoReducer();

const newTodo = {
  id: 2,
  todo: 'Comprar leche',
  done: false,
};

const agregarTodoAction = {
  type: 'agregar',
  payload: newTodo,
};

todos = todoReducer(todos, agregarTodoAction);

console.log(todos);
