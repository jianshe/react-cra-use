import React, { Component } from 'react';
import { Consumer } from '../AppContext';
import TopBar from '../components/TopBar';
export default class HomePage extends Component {
  render() {
    return (
      <div>
        <h1>HomePage</h1>
        <Consumer>{ctx => <div>{ctx.user.name}</div>}</Consumer>
        <TopBar/>
      </div>
    );
  }
}
