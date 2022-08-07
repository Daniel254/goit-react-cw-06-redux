const initState = { counter: 0 };
export const counterReducer = (state = initState, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return { ...state, counter: state.counter + action.payload.delta };
    case 'DECREMENT':
      return { ...state, counter: state.counter - action.payload.delta };
    default:
      return state;
  }
};
