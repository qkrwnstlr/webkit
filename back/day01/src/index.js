import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// redux 관련 모듈
import { Provider } from 'react-redux';
import { combineReducers, legacy_createStore as createStore } from 'redux';
import CountType from './CountType';
import AgeType from './AgeType';

// const currentState = { count: 10, age: 21 };

// function reducer(state = currentState, action) {
//   if (currentState === undefined) return { count: 10, age: 21 };
//   switch (action.type) {
//     case CountType.PLUS:
//       state.count++;
//       break;
//     case CountType.MINUS:
//       state.count--;
//       break;
//     case CountType.CHANGE:
//       state.count = action.count;
//       break;
//     case AgeType.PLUS:
//       state.age++;
//       break;
//     case AgeType.MINUS:
//       state.age--;
//       break;
//     case AgeType.CHANGE:
//       state.age = action.age;
//       break;
//     default:
//       break;
//   }
//   const newState = { ...state };
//   return newState;
// }

// let store = createStore(reducer);

const countState = { count: 10 };
const ageState = { age: 21 };

function countReducer(state = countState, action) {
  if (state === undefined) return { count: 10 };
  switch (action.type) {
    case CountType.PLUS:
      state.count++;
      break;
    case CountType.MINUS:
      state.count--;
      break;
    case CountType.CHANGE:
      state.count = action.count;
      break;
    default:
      break;
  }
  const newCountState = { ...state };
  return newCountState;
}

function ageReducer(state = ageState, action) {
  if (state === undefined) return { age: 21 };
  switch (action.type) {
    case AgeType.PLUS:
      state.age++;
      break;
    case AgeType.MINUS:
      state.age--;
      break;
    case AgeType.CHANGE:
      state.age = action.age;
      break;
    default:
      break;
  }
  const newAgeState = { ...state };
  return newAgeState;
}

let store = createStore(combineReducers({countReducer, ageReducer}));

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Provider store={store}><App /></Provider>);