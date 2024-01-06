import React, {useEffect, useMemo} from 'react';
import './styles/App.css'
import {BrowserRouter} from "react-router-dom";
import AppRouter from "./Navigation/AppRouter";

const App = () => {
    return(
        <BrowserRouter>
            <AppRouter/>
        </BrowserRouter>
    )
}

export default App;