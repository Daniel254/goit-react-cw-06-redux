import { configureStore } from '@reduxjs/toolkit';
import counter from './counterReducer';

// const rootReducer = combineReducers({
//   counterReducer,
// });

const store = configureStore({
  reducer: {
    counter,
  },
});

export default store;
