import { createReducer } from '@reduxjs/toolkit';
import { decrement, increment } from './counterActions';

export default createReducer(0, {
  [increment.type]: (state, action) => state + action.payload,
  [decrement.type]: (state, action) => state - action.payload,
});
