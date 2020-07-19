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
        },
        updateList(state, action) {
            state.all[action.payload.id].name = action.payload.name;
        },
    }
})

export const { add, openList, deleteList, updateList } = listSlice.actions;

export const getListById = (state, id) => state.all[id];
export const getEdittedList = (state) => state.edittedListId ? getListById(state, state.edittedListId) : null;

export default listSlice.reducer;