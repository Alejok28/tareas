import React, { Component } from 'react';

/// Modifica el componente para que se puedan agregar tareas

class App extends Component {
  constructor() {
    super();
    this.state = {
      term: '',
      tasks: ['Sacar la ropa', 'Hacer la cama', 'Leer un rato']
    }
  }

  handleChange(e) {
    this.setState({
      term: e.target.value
    })
  }

  handelSubmit(e) {
    e.preventDefault()
    this.setState({
      term: '',
      tasks: [...this.state.tasks, this.state.term]
    })
  }

  render() {
    return (
      <div className="wrapper">
        <div className="list">
          <h3>Por hacer:</h3>
          <ul className="todo">
            {this.state.tasks.map((task, id) => <li key= {id}>{task}</li>)}
          </ul>
           <form onSubmit={this.handelSubmit.bind(this)}>
             <input type="text" id="new-task" placeholder="Ingresa una tarea y oprime Enter" onChange={this.handleChange.bind(this)} value={this.state.term}/>
           </form>
        </div>
      </div>
    )
  }
}


export default App;
