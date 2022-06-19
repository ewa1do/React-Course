const todoReducer = (state = [], action) => {
  console.log(action);

  switch (action.type) {
    case 'add':
      return [...state, action.payload];

    default:
      return state;
  }
};

export default todoReducer;
