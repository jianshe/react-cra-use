import React, { Component } from 'react';
class LifeCycle extends Component {
  constructor() {
    super(...arguments);
    this.state = {
      counter: 0
    }
  }
  render() {
    return (
      <div>
        { this.state.counter}
      </div>
    );
  }
}

export default LifeCycle;