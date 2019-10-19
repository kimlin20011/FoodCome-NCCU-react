import React, { Component } from 'react';

class CreateTodoButton extends Component {
  render() {
      return <button onClick={this.props.createTodo}>新增</button>;
  }
}

export default CreateTodoButton;
