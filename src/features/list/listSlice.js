import { createSlice } from "@reduxjs/toolkit";

export const listSlice = createSlice({
    name: 'lists',
    initialState: {
        lastId: 0,
        activeListId: null,
        edittedListId: null,
        all: {}
    },
    reducers: {
        add(state, action) {
            state.all[++state.lastId] = {
                id: state.lastId,
                name: action.payload
            };
        },
        cancelListEdit(state) {
            state.edittedListId = null;
        },
        openList(state, action) {
            state.activeListId = action.payload
        },
        editList(state, action) {
            state.edittedListId = action.payload;
        },
        deleteList(state, action) {
            if (state.activeListId === action.payload) {
                state.activeListId = null;
            }
            delete state.all[action.payload];
        },
        updateList(state, action) {
            state.all[state.edittedListId].name = action.payload;
            state.edittedListId = null;
        },
    }
})

export const { add, cancelListEdit, openList, editList, deleteList, updateList } = listSlice.actions;

export const getListById = (state, id) => state.all[id];
export const getEdittedList = (state) => state.edittedListId ? getListById(state, state.edittedListId) : null;

export default listSlice.reducer;