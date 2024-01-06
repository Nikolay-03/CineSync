import React from 'react';
import {Routes, Route, Navigate} from "react-router-dom";
import './routes'
import {TOP_MOVIES} from "./routes";
import TopMovies from "../Pages/TopMovies";
import MoviePage from "./MoviePage";

const AppRouter = () => {
    return (
        <Routes>
            <Route path={TOP_MOVIES} element={<TopMovies/>}/>
            <Route path={'/movies/:id'} element={<MoviePage/>}/>
            <Route path='*' element={<Navigate to={TOP_MOVIES}/>}/>
        </Routes>
    );
};

export default AppRouter;