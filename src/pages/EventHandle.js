import React, { Component } from 'react';

class EventHandle extends Component {
  constructor() {
    super(...arguments);
    this.state = {
      inputValue: ''
    };
  }
  setChange = event => {
    this.setState({
      inputValue: event.target.value
    });
  };
  goSubmit = () => {
    console.log('你提交的值为:' + this.state.inputValue);
    this.props.tellme('子组件调用父类函数');
  };
  render() {
    const name = this.props.name;
    return (
      <div>
        <input value={name} onChange={this.setChange} />
        <button onClick={this.goSubmit}>提交</button>
        <br />
        {this.state.inputValue}
      </div>
    );
  }
}

export default EventHandle;
