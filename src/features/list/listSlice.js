import { createSlice } from "@reduxjs/toolkit";

export const listSlice = createSlice({
    name: 'lists',
    initialState: {
        lastId: 0,
        activeListId: null,
        all: {}
    },
    reducers: {
        add(state, action) {
            state.all[++state.lastId] = {
                id: state.lastId,
                name: action.payload
            };
        },
        openList(state, action) {
            state.activeListId = action.payload
        },
        deleteList(state, action) {
            if (state.activeListId === action.payload) {
                state.activeListId = null;
            }
            delete state.all[action.payload];
        }
    }
})

export const { add, openList, deleteList } = listSlice.actions;

export const getListById = (state, id) => state.all[id];

export default listSlice.reducer;