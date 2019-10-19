import React, { Component } from 'react';

class TodoInput extends Component {
  render() {
      return <input 
        type="text" 
        placeholder="輸入新待辦事項..."    
        value={this.props.inputText}
        onChange={this.props.udpateInputText}    
      />;
  }
}

export default TodoInput;
