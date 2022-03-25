
import './App.css';
import React from 'react';
import Listar from "./componentes/Listar";
import Crear from "./componentes/Crear";
import Editar from "./componentes/Editar"
import { Route,Routes } from "react-router-dom";
import {Link } from "react-router-dom";

function App() {
return (
  <>
   <nav className="navbar navbar-expand navbar-light bg-light">
        <div className="nav navbar-nav">
            <Link className="nav-item nav-link active" to={"/"}>Sistema </Link>
            <Link className="nav-item nav-link" to={"/crear"}>Crear empleado</Link>
            <Link className="nav-item nav-link" to={"/editar"}>Editar empleado</Link>
        </div>
    </nav>
  <div className="container">
    <br></br>
  <Routes>

  <Route exact path="/" element={<Listar/>}/>
  <Route exact path="/crear" element={<Crear/>}/>
  <Route exact path="/editar/:id" element={<Editar/>}/>
</Routes>
</div>
</>
);
}

export default App;
