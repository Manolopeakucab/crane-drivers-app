import React from "react";
import { Route, Routes, NavLink } from "react-router-dom";

const Layout = () => {
    return (
        <footer>
        <NavLink to="/login">Login (si)</NavLink>
        <NavLink to="/">Usuarios</NavLink>
        <NavLink to="/test">Proveedores</NavLink>
        </footer>
    )
}

export default Layout;