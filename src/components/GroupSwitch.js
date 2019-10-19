import React, { Component } from 'react';
import { Clickable } from './StyledComponents'
import styled from 'styled-components';
import {
  Link
} from 'react-router-dom'

// 群組分類按鈕，繼承自Clickable，並依據是否為目前選取群組改變背景色
const GroupButton = Clickable.extend`
    border: 1px solid black;
    background-color:  ${props => props.active ? 'darkorange' : 'brown'};
    margin: 3px; 
    padding: 3px;
`;
class GroupSwitch extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    // 繪製所有群組按鈕
    const groupNode = this.props.groups.map((group, index) => {
      return (
        //新增link的router
        <Link key={index} to={group.id ? '/group/' + group.id : '/'}>
          <GroupButton
            key={index}
            onClick={(e) => this.props.switchGroup(group.id)}
            active={this.props.activeGroupId === group.id}
          >
            {group.name}
          </GroupButton>
        </Link>
      );
    });
    return <div> {groupNode} </div>
  }
}
export default GroupSwitch;
