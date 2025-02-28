import {configureStore} from '@reduxjs/toolkit';
import {searcherReducer} from "../store/slices/searcherSlice.ts";

export const store = configureStore({
    reducer: {
        searcher: searcherReducer,
    }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;