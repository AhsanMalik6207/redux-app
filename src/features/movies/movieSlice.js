import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import movieApi from '../../common/Apis/movieApi';
import { APIKey } from '../../common/Apis/MovieApiKey';

export const fetchAsyncMovies = createAsyncThunk('movies/fetchAsyncMovies',async(term)=>{
    const response = await movieApi.get(`?apiKey=${APIKey}&s=${term}&type=movie`)
    return response.data;
});

export const fetchAsyncShows = createAsyncThunk('movies/fetchAsyncShows',async(term)=>{
    const response = await movieApi.get(`?apiKey=${APIKey}&s=${term}&type=series`)
    return response.data;
});

export const fetchAsyncMovieorShowDetail = createAsyncThunk('movies/fetchAsyncMovieorShowDetail',async(id)=>{
    const response = await movieApi.get(`?apiKey=${APIKey}&i=${id}&Plot=full`)
    return response.data;
});
const initialState = {
    movies:{},
    shows:{},
    selectedMovieorShow: {},
}
const movieSlice = createSlice({
        name:"movies",
        initialState,
        reducers:{
            removeSelectedMovieOrShow:(state)=>{
                state.selectedMovieorShow= {};
            }
        },
        extraReducers: {
            [fetchAsyncMovies.pending]: ()=>{
                console.log("pending here");
            },
            [fetchAsyncMovies.fulfilled]: (state, {payload})=>{
                console.log("fulfilled successfully");
                return {...state, movies:payload};
            },
            [fetchAsyncMovies.rejected]: ()=>{
                console.log("rejected here");
            },
            [fetchAsyncShows.fulfilled]: (state, {payload})=>{
                console.log("fulfilled successfully");
                return {...state, shows:payload};
            },
            [fetchAsyncMovieorShowDetail.fulfilled]: (state, {payload})=>{
                console.log("fulfilled successfully");
                return {...state, selectedMovieorShow:payload};
            },
        }
});
// 

export const {removeSelectedMovieOrShow} = movieSlice.actions;
export const getAllMovies = (state)=> state.movies.movies;
export const getAllShows = (state)=> state.movies.shows;
export const getSelectedMovieorShow = (state)=> state.movies.selectedMovieorShow;
export default movieSlice.reducer;