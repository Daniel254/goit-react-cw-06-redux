import { createStore } from 'redux';
import { counterReducer } from './counterReducer';

// const rootReducer = combineReducers({
//   counterReducer,
// });

export const store = createStore(counterReducer);
