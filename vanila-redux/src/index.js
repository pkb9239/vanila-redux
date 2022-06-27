import { createStore, dispatch } from "redux";

const add = document.querySelector("#add");
const minus = document.querySelector("#minus");
const number = document.querySelector("span");

const MINUS = 'MINUS';
const ADD = 'ADD';

const reducer = (state = 0, action) => {
  switch (action.type) {
    case ADD:
      return state + 1
    case MINUS:
      return state - 1
    default:
      return state;
  }
};

const store = createStore(reducer);

const onChange = () => {
  number.innerText = store.getState();
}

store.subscribe(onChange);

add.addEventListener('click', () => {
  store.dispatch({ type: ADD });
});
minus.addEventListener('click', () => {
  store.dispatch({ type: MINUS });
});