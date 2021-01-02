import { Component } from "react";
import React from 'react';

class Formulario extends Component{

    constructor(){
        super();
        this.state = {
            "titulo": "",
            "responsable": "",
            "descripcion": "",
            "prioridad": "Baja"
        };
        this.handleInput = this.handleInput.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }

    handleInput(e){

        const { value, name} =e.target;
        this.setState({
           [name]: value 
        })
        
    }

    handleSubmit(e){
        
        e.preventDefault();

        fetch('./todos.json', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(
                this.state
            )
        });
    
        
    }
        
   
        render(){

            return (
                <div className="card " >
                    <form className="card-body " onSubmit={this.handleSubmit}>
                        
                            <h4>Agregar Tarea</h4>
                        
                        <div className="form-group ">
                            <input type="text" name="titulo" className="form-control" placeholder="Titulo" onChange={this.handleInput}/>
                        </div>
                        <div className="form-group">
                            <input type="text" name="responsable" className="form-control" placeholder="Responsable" onChange={this.handleInput}/>
                        </div>
                        <div className="form-group">
                            <textarea name="descripcion" className="form-control" placeholder="Descripción" onChange={this.handleInput}/>
                        </div>
                        
                        <div className="form-group">
                            <div className="row">
                                <div className="col-md-4 ">
                                    Alta<input type="radio" name="prioridad" className="form-control" value="Alta" onChange={this.handleInput}/>
                                
                                    
                                </div>
                                <div className="col-md-4 ">
                                
                                    Media<input type="radio" name="prioridad" className="form-control" value="Media" onChange={this.handleInput}/>
                                
                                </div>
                                <div className="col-md-4 ">
                                
                                    Baja<input type="radio" name="prioridad" className="form-control" value="Baja" onChange={this.handleInput}/>
                                
                                </div>
                                    
                            </div>
                        </div>
                        
                    
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </form>

                </div>
                
    )
        }
       
    
}

export default Formulario;