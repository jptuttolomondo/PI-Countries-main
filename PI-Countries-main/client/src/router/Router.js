import * as React from "react";
import {Route,Routes,BrowserRouter } from "react-router-dom";
import { LandingPage } from "../components/landing/landPage";
import { AgregarActividades } from "../components/activities/AgregarActividades";
import { DetalleDePais } from "../components/countries/detalleDePais";
import { Home } from "../components/home/Home";

//    AGregar!!      
export const AppRouter=()=>{
        return(
<BrowserRouter>
            <Routes>
                <Route exact path="/" element={<LandingPage/>} > </Route>
                <Route exact path="/Home" element={<Home/>} > </Route>
                <Route exact path="/:id" element={<DetalleDePais/>} > </Route>
                <Route exact path="/activity" element={<AgregarActividades/>} > </Route>
                </Routes>
</BrowserRouter>
        )
}
