import {createAsyncThunk} from "@reduxjs/toolkit";
import axiosAPI from "../../axiosAPI.ts";

export const fetchShows = createAsyncThunk ("searcher/fetchShows", async (query: string) => {
    const response = await axiosAPI.get(`search/shows?q=${query}`);
    return response.data.map((item: { show: IShow }) => item.show);
});