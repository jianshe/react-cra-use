import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
// import LifeCycle from "./pages/LifeCycle";
import ClassComponent from "./pages/ClassComponent"
// import FunComponent from "./pages/FunComponent"
// import EventHandle from "./pages/EventHandle"
class App extends Component {
  render() {
    function tellme(msg) {
      console.log('子调用父函数时传递的值:' + msg)
    }
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        {/* <LifeCycle /> */}
        <ClassComponent/>
        {/* <FunComponent/> */}
        {/* <EventHandle name="我是input输入框要传递的值" tellme={tellme}/> */}
      </div>
    );
  }
}

export default App;
