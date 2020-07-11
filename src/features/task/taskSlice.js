import { createSlice } from "@reduxjs/toolkit";

export const taskSlice = createSlice({
    name: 'task',
    initialState: {
        lastId: 0,
        all: {}
    },
    reducers: {
        add: (state, action) => {
            state.lastId++;
            state.all[state.lastId] = {
                id: state.lastId,
                text: action.payload,
                done: false
            };
        }
    }
})

export const { add } = taskSlice.actions;

export const getTaskById = (state, id) => state.all[id];

export default taskSlice.reducer;