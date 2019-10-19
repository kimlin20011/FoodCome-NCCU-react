import React, { Component } from 'react';
import { SimpleList } from './StyledComponents';
import Todo from './Todo';

class TodoList extends Component {
  render() {
    const { todos } = this.props;
    return (
      <SimpleList>
        {todos.map((todo, index) => {
          return (<Todo 
            key={index} 
            todo={todo} 
            remove={this.props.remove}
          />);
        })}
      </SimpleList>
    );
  }
}

export default TodoList;
