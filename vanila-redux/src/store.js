import { configureStore, createSlice } from '@reduxjs/toolkit';

import { combineReducers } from "redux";
import { persistReducer } from 'redux-persist';
import storage from "redux-persist/lib/storage";

const toDos = createSlice({
    name: 'toDosReducer',
    initialState: [],
    reducers: {
        add: (state, action) => {
            state.push({ text: action.payload, id: Date.now() })
        },
        remove: (state, action) =>
            state.filter((todo) => todo !== action.payload)
    }
});

const persistConfig = {
    key: "todo", //localStorage에 저장될 key값
    storage: storage
};
const allReducer = combineReducers({
    reducer: toDos.reducer
});


const store = configureStore(persistReducer(persistConfig, allReducer));

export const {
    add,
    remove
} = toDos.actions

export default store;