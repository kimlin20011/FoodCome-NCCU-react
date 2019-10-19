import React, { Component } from 'react';
import Title from './Title';
import CreateTodo from './CreateTodo';
import TodoList from './TodoList';

class GroupTabContent extends Component {

  constructor() {
    super();  
  }
  createTodo(newtodo) {
    this.props.createTodo && 
      this.props.createTodo(newtodo, this.props.groupid);
  }
  render() {

    return (
      <div>
          <Title todos={this.props.todos}/>
          <CreateTodo 
             createTodo={(newtodo) => this.createTodo(newtodo)}/>
          <TodoList 
            todos={this.props.todos}        
            remove={this.props.removeTodo}    
          />
      </div>
    );
  }
}

export default GroupTabContent;
 