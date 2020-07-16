import { createSlice } from "@reduxjs/toolkit";

export const taskSlice = createSlice({
    name: 'tasks',
    initialState: {
        lastId: 0,
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
        deleteTask(state, action) {
            delete state.all[action.payload];
        },
        toggleTask(state, action) {
            state.all[action.payload].done = !state.all[action.payload].done;
        }
    }
})

export const { add, deleteTask, toggleTask } = taskSlice.actions;

export const getTaskById = (state, id) => state.all[id];
export const getTasksByList = (state, listId) => Object.values(state.all).filter(t => t.listId === listId);

export default taskSlice.reducer;