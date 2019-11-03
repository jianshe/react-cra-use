import React, { Component } from 'react';
import { handleConsumer } from '../AppContext';


export default class TopBar extends Component {
  render() {
    const Top = handleConsumer(TopBarHandle);
    return (
      <div>
        <h1>TopBar</h1>
        <Top />
      </div>
    );
  }
}
function TopBarHandle(props) {
  return <div className="topBar">{props.user.name}</div>;
}
