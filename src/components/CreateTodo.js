import React, { Component } from 'react';
import TodoInput from './TodoInput';
import CreateTodoButton from './CreateTodoButton';

class CreaetTodo extends Component {

  constructor() {
      super();
      this.state = {
          inputText: '',
      }
  }

  createTodo() {
    if(this.state.inputText){
        this.props.createTodo &&
            this.props.createTodo(this.state.inputText);
        this.setState({
            inputText: ''
        })
    }
  }

  udpateInputText(event) {
    this.setState({
        inputText: event.target.value
    })
  }

  render() {
      return (
      <form onSubmit={(e) => {
        e.preventDefault();
        this.createTodo();        
      }}
      >
          <TodoInput inputText={this.state.inputText} 
             udpateInputText={(event) => this.udpateInputText(event)}/> 
          <CreateTodoButton createTodo={() => this.createTodo()}/>
      </form>);
  }
}

export default CreaetTodo;
