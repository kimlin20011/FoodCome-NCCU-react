import React, { Component } from 'react';

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

import AllGroupsTabContent from './components/AllGroupsTabContent';
import GroupTabContent from './components/GroupTabContent';
import GroupSwitch from './components/GroupSwitch';

class App extends Component {

  constructor() {
    super();
    // 待辦事項清單
    let todos = [
      { text: '買牛奶', groupid: 'living' },
      { text: '繳電話費', groupid: 'living' },
      { text: '去銀行', groupid: 'living' },
      { text: '內部會議', groupid: 'work' },
      { text: '回信', groupid: 'work' },
      { text: '拜訪客戶', groupid: 'work' },
      { text: '家長會', groupid: 'family' },
    ];
    // 待辦事項分類
    let groups = [
      { name: '全部', id: undefined },
      { name: '生活', id: 'living' },
      { name: '工作', id: 'work' },
      { name: '家庭', id: 'family' }
    ];

    this.state = {
      todos: todos,
      groups: groups,
      // 目前選取中的分類
      activeGroupId: undefined,
    }
  }

  createTodo(newtodotext, groupid) {

    const newtodo = {
      text: newtodotext,
      //容錯，使用者輸入的代碼或是目前使用中的代碼
      groupid: groupid || this.state.activeGroupId
    }

    this.setState({
      todos: [...this.state.todos, newtodo]
    })
  }

  removeTodo(removingtodo) {
    const newtodos = this.state.todos.filter((todo, index) => {
      //檢查是否屬於同一個群組
      return !(todo.groupid == removingtodo.groupid &&
        //檢查文字是否相同
        removingtodo.text === todo.text)
    });
    this.setState({
      todos: newtodos
    })
  }


  //讓使用者可以切換代辦事項群組
  switchGroup(groupid) {
    this.setState({
      activeGroupId: groupid
    })
  }

  render() {
    return (
      <Router>
        <div>
          <Route exact path="/"
            render={() => {
              return (
                <div>
                  <GroupSwitch
                    groups={this.state.groups}
                    activeGroupId={undefined}
                    switchGroup={(groupid) => this.switchGroup(groupid)}
                  />
                  <AllGroupsTabContent
                    todos={this.state.todos}
                    removeTodo={(todo) => this.removeTodo(todo)}
                  />
                </div>

              );

            }}
          />

          <Route exact path="/group/:id"
            render={({ match }) => {
              const todos = this.state.todos.filter((todo, index) => {
                return todo.groupid === match.params.id;
              })
              return (
                <div>
                  <GroupSwitch
                    groups={this.state.groups}
                    activeGroupId={match.params.id}
                    switchGroup={(groupid) => this.switchGroup(groupid)}
                  />
                  <GroupTabContent
                    todos={todos}
                    createTodo={(newtodo, groupid) => this.createTodo(newtodo, groupid)}
                    removeTodo={(todo) => this.removeTodo(todo)}
                  />
                </div>

              );

            }}
          />


        </div>
      </Router>
    );
  }
}


  // render() { 
  //   // 依據選取中的分類群組代碼過濾待辦事項清單，未選取就不過濾視作全部，產生新的整列
  //   const todos = this.state.activeGroupId ? this.state.todos.filter((todo, index) => {
  //     return todo.groupid === this.state.activeGroupId;
  //   }) : this.state.todos;

  //   // 若有選取分類渠組，則顯示群組分類元件，若沒有選取，則顯示全部待辦事項分類
  //   const tabContent = this.state.activeGroupId ? 
  //     (<GroupTabContent 
  //       todos={todos} 
  //       createTodo={(newtodo, groupid) => this.createTodo(newtodo, groupid)} 
  //       removeTodo={(todo) => this.removeTodo(todo)} 
  //     />) 
  //     :  
  //     (<AllGroupsTabContent 
  //       todos={todos} 
  //       removeTodo={(todo) => this.removeTodo(todo)} 
  //     />);


  //   //透過定義完上面的代辦事項清單完後，再繪製下面的代辦事項清單列表
  //   return (
  //     <div> 
  //       <GroupSwitch
  //         groups={this.state.groups}
  //         activeGroupId={this.state.activeGroupId}
  //         switchGroup={(groupid) => this.switchGroup(groupid)}
  //       />
  //       <div>
  //         {tabContent}
  //       </div>

  //     </div>
  //   );
  // }

export default App;
