import React, { Component } from 'react';
class LifeCycle extends Component {
  constructor() {
    super(...arguments);
    this.state = {
      counter: 0
    };
    console.log('constructor', this.state);
  }
  static getDerivedStateFromProps(props, state) {
    console.log('getDerivedStateFromProps', props, state)
    // 返回null不对state做任何的改变，返回一个对象代表对之前的属性做一定的改变
    return state.counter !== 5 ? null : { counter: 0 }
    // return null;
  }
  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('getSnapshotBeforeUpdate',prevProps,prevState)
    return null;
  }
  // UNSAFE_componentWillMount() {
  //   console.log('componentWillMount', this.state);
  // }
  shouldComponentUpdate(nextProps, nextState) {
    // console.log('shouldComponentUpdate', this.state)
    console.log('shouldComponentUpdate', nextProps, nextState);
    return nextState.counter !== 3;
  }
  // UNSAFE_componentWillUpdate() {
  //   console.log('componentWillUpdate', this.state);
  // }
  componentDidUpdate() {
    console.log('componentDidUpdate', this.state);
  }
  setCounter = () => {
    this.setState({
      counter: this.state.counter + 1
    });
  };
  render() {
    console.log('render', this.state);
    const { counter } = this.state;
    return (
      <div>
        <h1>LifeCycle</h1>
        <p onClick={this.setCounter}>{counter}</p>
        {counter !== 2 && <Foo counter={counter} />}
      </div>
    );
  }
  componentDidMount() {
    console.log('componentDidMount');
  }
}

class Foo extends Component {
  // UNSAFE_componentWillReceiveProps(props, state) {
  //   console.log('componentWillReceiveProps', props, state);
  // }
  componentWillUnmount() {
    console.log('componentWillUnmount');
  }
  render() {
    const { counter } = this.props;
    return (
      <div>
        <h1>Foo</h1>
        <p>{counter}</p>
      </div>
    );
  }
}

export default LifeCycle;
