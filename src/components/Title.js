import React, { Component } from 'react';

class Title extends Component {
  render() {
      return <h2>待辦事項清單({this.props.todos.length})</h2>;
  }
}

export default Title;
