import {createSlice} from "@reduxjs/toolkit";
import {fetchShows} from "../thunks/seracherThunks.ts";

interface SearcherState {
 shows: IShow[];
 loading: boolean;
 error: string | null;
}

const initialState: SearcherState = {
    shows: [],
    loading: false,
    error: null,
};

export const searcherSlice = createSlice({
    name: 'searcher',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchShows.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchShows.fulfilled, (state, action) => {
                state.loading = false;
                state.shows = action.payload;
            })
            .addCase(fetchShows.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message || "Error fetching shows...";
            });
    },
});

export const searcherReducer = searcherSlice.reducer;