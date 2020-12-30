import { Component } from "react";
import React from 'react';

function Navegacion(props) {
    
        return (
            <nav className="navbar navbar-dark bg-dark">
                <button type="button" className="btn btn-light">
                { props.titulo } <span className="badge badge-pill badge-info" >{ props.dato}</span>
                </button>
               
            </nav>
        )
    
}

export default Navegacion;