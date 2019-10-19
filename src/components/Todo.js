import React, { Component } from 'react';
import styled , {keyframes } from 'styled-components';


const Clickable = styled.span`
cursor: pointer;
`;

const TodoText = styled.span`  
color: ${(props) => {return props.color || 'black'}};
`;

const BlackTodoText = TodoText.extend`  
color: black
`;


const slideInFromRight = keyframes`
from {
  margin-left: 100%
}
to {
   margin-left: 0%
}
`

const TodoItem = styled.h3`
border-bottom: 1px #777777 solid;
margin-bottom: 15px;
padding-bottom: 5px;
animation: ${slideInFromRight} 0.1s linear 1;
@media (max-width: 700px) {
  background: palevioletred;
}
`;



class Todo extends Component {
  render() {
      return (<TodoItem>
            <Clickable
              onClick={() => {
                this.props.remove(this.props.todo);
              }}
            >
              <BlackTodoText color='red'>
                {this.props.todo.text}
              </BlackTodoText>
            </Clickable>  
        </TodoItem>)     
  }
}

export default Todo;
