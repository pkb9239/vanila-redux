import { createStore } from 'redux';
import { combineReducers } from "redux";
import { persistReducer } from 'redux-persist';
import storage from "redux-persist/lib/storage";

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


const reducer = (state = [], action) => {
    switch (action.type) {
        case ADD:
            return [{ text: action.text, id: Date.now() }, ...state];
        case DELETE:
            return state.filter((todo) => todo !== action.id);
        default:
            return state;
    }
};


const persistConfig = {
    key: "todo", //localStorage에 저장될 key값
    storage: storage
};
const allReducer = combineReducers({
    reducer
});


const store = createStore(persistReducer(persistConfig, allReducer));

export const actionCreators = {
    addToDo,
    deleteToDo
}

export default store;