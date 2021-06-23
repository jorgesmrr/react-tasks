import { configureStore } from "@reduxjs/toolkit";
import taskReducer from "../features/task/taskSlice";
import listReducer from "../features/list/listSlice";

const saveToLocalStorage = (state) => {
    try {
        localStorage.setItem("todo-state", JSON.stringify(state));
    } catch (e) {
        console.error(e);
    }
};

const loadFromLocalStorage = () => {
    try {
        const stateStr = localStorage.getItem("todo-state");
        return stateStr ? JSON.parse(stateStr) : undefined;
    } catch (e) {
        console.error(e);
        return undefined;
    }
};

const preloadedState = loadFromLocalStorage();

const store = configureStore({
    reducer: {
        tasks: taskReducer,
        lists: listReducer,
    },
    preloadedState,
});

store.subscribe(() => saveToLocalStorage(store.getState()));

export default store;
