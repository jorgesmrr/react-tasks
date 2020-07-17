import { createSlice } from "@reduxjs/toolkit";

export const taskSlice = createSlice({
    name: 'tasks',
    initialState: {
        lastId: 0,
        edittedTaskId: null,
        all: {}
    },
    reducers: {
        add(state, action) {
            const { text, listId } = action.payload;

            state.all[++state.lastId] = {
                id: state.lastId,
                done: false,
                text,
                listId
            };
        },
        cancelTaskEdit(state) {
            state.edittedTaskId = null;
        },
        deleteTask(state, action) {
            delete state.all[action.payload];
        },
        editTask(state, action) {
            state.edittedTaskId = action.payload;
        },
        toggleTask(state, action) {
            state.all[action.payload].done = !state.all[action.payload].done;
        },
        updateTask(state, action) {
            state.all[state.edittedTaskId].text = action.payload;
            state.edittedTaskId = null;
        },
    }
})

export const { add, cancelTaskEdit, deleteTask, editTask, toggleTask, updateTask } = taskSlice.actions;

export const getTaskById = (state, id) => state.all[id];
export const getTasksByList = (state, listId) => Object.values(state.all).filter(t => t.listId === listId);
export const getEdittedTask = (state) => state.edittedTaskId ? getTaskById(state, state.edittedTaskId) : null;

export default taskSlice.reducer;