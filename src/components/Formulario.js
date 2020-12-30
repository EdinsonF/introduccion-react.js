import { Component } from "react";
import React from 'react';

function Formulario(props) {
    
        return (
                    <div className="card">
                        <form className="card-body">
                            
                                <h4>Agregar Tarea</h4>
                            
                            <div className="form-group">
                                <input type="text" name="titulo" className="form-control" placeholder="Titulo"/>
                            </div>
                            <div className="form-group">
                                <input type="text" name="responsable" className="form-control" placeholder="Responsable"/>
                            </div>
                            <div className="form-group">
                                <textarea name="responsable" className="form-control" placeholder="Descripción"/>
                            </div>
                            
                            <div className="form-group">
                                <div className="row">
                                    <div className="col-md-4 ">
                                        Alta<input type="radio" name="prioridad" className="form-control" value="Alta"/>
                                    
                                        
                                    </div>
                                    <div className="col-md-4 ">
                                    
                                        Media<input type="radio" name="prioridad" className="form-control" value="Media"/>
                                    
                                    </div>
                                    <div className="col-md-4 ">
                                    
                                        Baja<input type="radio" name="prioridad" className="form-control" value="Baja"/>
                                    
                                    </div>
                                        
                                </div>
                            </div>
                            
                        
                            <button type="submit" className="btn btn-primary">Submit</button>
                        </form>

                    </div>
                    
        )
    
}

export default Formulario;