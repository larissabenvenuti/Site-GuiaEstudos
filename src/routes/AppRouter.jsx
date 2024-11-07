import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Error from "../pages/Error";
import Login from "../pages/Login";
import Contador from "../pages/Contador";
import Disciplinas from "../pages/Disciplinas";
import Sobre from "../pages/Sobre";


export default function AppRouter() {
    return (
        <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/disciplinas" element={<Disciplinas />}></Route>
            <Route path="/contador" element={<Contador />}></Route>
            <Route path="/contador/:id" element={<Contador />}></Route>
            <Route path="/sobre" element={<Sobre />}></Route>
            <Route path="*" element={<Error />}></Route>
        </Routes>
    );
}
