import { Component } from "react";
import logo from './logo.svg';
import './App.css';

import Navegacion from './components/navegacion';
import Formulario from './components/Formulario';


import { todos } from './todos.json';
console.log(todos);

class App extends Component {

constructor(){
  super();
  this.state = {
    todos
  }
}
  render(){

     const datos = this.state.todos.map((todo, i) =>{
       
        return(
        <div className="col-md-4">
            <div className="card mt-4">
              
                <div className="row card-header">
                  <div className="col">
                      <div >
                        <h3>{todo.titulo}</h3>
                      </div>
                  </div>
                  
                  <div className="col">
                  <span className="badge badge-pill badge-danger izquierda col-md-8 mt-2" >
                      {todo.prioridad}
                    </span>
                  </div>
                </div>
 
              <div className="card-body">
                {todo.responsable}
              </div> 
               <div className="card-body">
                {todo.descripcion}
              </div> 
            </div>
        </div>
          
        );
      })


    return ( 
        <div className="App">
          <Navegacion titulo="Mis tareas" dato={this.state.todos.length}/>
          <div className="row">
            <div className="col-md-4 mt-4">
                <Formulario />
            </div>
            <div className="col-md-8">
                <div className="container">
                <div className="row">
                  {datos}
                </div>
          </div>
            </div>
          </div>

          
          <img src={logo} className="App-logo" alt="logo" /> 
        </div>
    )
  }
  
}

export default App;
