import { createSlice } from "@reduxjs/toolkit";

export const listSlice = createSlice({
    name: "lists",
    initialState: {
        lastId: 0,
        activeListId: null,
        all: {},
    },
    reducers: {
        add(state, action) {
            state.all[++state.lastId] = {
                id: state.lastId,
                name: action.payload,
            };
        },
        openList(state, action) {
            state.activeListId = action.payload;
        },
        deleteList(state, action) {
            if (state.activeListId === action.payload) {
                state.activeListId = null;
            }
            delete state.all[action.payload];

            const ids = Object.keys(state.all);
            if (ids.length) {
                state.activeListId = ids[0];
            }
        },
        updateList(state, action) {
            state.all[action.payload.id].name = action.payload.name;
        },
    },
});

export const { add, openList, deleteList, updateList } = listSlice.actions;

export const getListsIds = (state) =>
    Object.keys(state.all)
        .map((listId) => Number(listId))
        .reverse();
export const getListById = (state, id) => state.all[id];

export default listSlice.reducer;
