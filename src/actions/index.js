export const increment = (mult) => {
  return{
    type: 'INCREMENT',
    payload: mult
  };
};

export const decrement = () => {
  return{
    type: 'DECREMENT'
  };
};