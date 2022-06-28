import { createStore } from 'redux';

const ADD = "ADD";
const DELETE = "DELETE";

const addToDo = (text) => {
    return {
        type: ADD,
        text
    };
};
const deleteToDo = (id) => {
    return {
        type: DELETE,
        id: parseInt(id)
    };
};
JSON.parse(localStorage.getItem("toDos")) || localStorage.setItem("toDos", JSON.stringify([]));


const reducer = (state = [], action) => {
    switch (action.type) {
        case ADD:
            return [{ text: action.text, id: Date.now() }, ...state];
        case DELETE:
            const delItem = state.filter((toDo) => toDo.id !== action.id);
            localStorage.setItem("toDos", JSON.stringify(delItem));
            return delItem;
        default:
            return state;
    }
};

const store = createStore(reducer);

export const actionCreators = {
    addToDo,
    deleteToDo
}

export default store;