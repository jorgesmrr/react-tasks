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
        }
    }
})

export const { add } = taskSlice.actions;

export const getTaskById = (state, id) => state.all[id];
export const getTasksByList = (state, listId) => Object.values(state.all).filter(t => t.listId === listId);

export default taskSlice.reducer;