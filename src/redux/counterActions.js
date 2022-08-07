export const increment = (delta = 1) => ({
  type: 'INCREMENT',
  payload: { delta },
});
export const decrement = (delta = 1) => ({
  type: 'DECREMENT',
  payload: { delta },
});
