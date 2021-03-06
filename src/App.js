import { Component } from "react";
import logo from './logo.svg';
import './App.css';

import Navegacion from './components/navegacion';
import Formulario from './components/Formulario';


import { todos } from './todos.json';


class App extends Component {

constructor(){ 
  super();
  this.state = {
    todos
  };

  this.handleAddAll = this.handleAddAll.bind(this);

  this.url = 'http://localhost:3000/todos';

}

handleAddAll(todo){
  
  this.setState({
    todos: [...this.state.todos, todo]
  })

}

async removeTask(id){
  
  try {
    await fetch(`${this.url}/${id}`,{
        method : 'DELETE'
    });
       
} catch (error) {
    console.log(error);
}
  
}
  render(){

     const datos = this.state.todos.map((todo) =>{
       
        return(
        <div className="col-md-4 ">
            <div className="card mt-4" key={todo.id}>
              
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
              <div className="card-footer">
                <button className="btn btn-danger" onClick={this.removeTask.bind(this, todo.id)}>X</button>
              </div>
            </div>
        </div>
          
        );
      })


    return ( 
        <div className="App">
          <Navegacion titulo="Mis tareas" dato={this.state.todos.length}/>
          <div className="row">
            
              <div className="col-md-3 container">
              <img src={logo} className="App-logo" alt="logo" /> 
                  <Formulario onAddAll={this.handleAddAll}/>
              </div>
           
            
            <div className="col-md-8">
                <div className="container">
                  <div className="row">
                    {datos}
                  </div>
                </div>
            </div>
          </div>

          
         
        </div>
    )
  }
  
}

export default App;
