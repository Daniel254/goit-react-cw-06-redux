import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import {  } from 'redux';
import * as counterActions from 'redux/counterActions';
import css from './Counter.module.css';

export default function Counter() {
  const value = useSelector(state => state.counter);
  console.log('state.counter', value);
  const dispatch = useDispatch();
  return (
    <div className={css.container}>
      <button
        type="button"
        className={css.button}
        onClick={() => dispatch(counterActions.decrement(5))}
      >
        &#8722;
      </button>
      <p className={css.value}>{value} minutes</p>
      <button
        type="button"
        className={css.button}
        onClick={() => dispatch(counterActions.increment(5))}
      >
        &#43;
      </button>
    </div>
  );
}
