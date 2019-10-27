import React, { Component } from 'react';
class ClassComponent extends Component {
  /**
   *  实现小时钟功能
   * ***/
  constructor() {
    super(...arguments);
    this.state = {
      date: new Date(),
      counter: 0
    };
  }
  setCounter = () => {
    // this.setState({
    //   counter: this.state.counter + 1
    // })
    // 实现同步方法
    // 方法1：
    // this.setState(nextState => {
    //   return {
    //     counter: nextState.counter + 1,
    //   };
    // });
    // 方法2
    // setTimeout(() => {
    //   this.setState({
    //     counter: this.state.counter + 1
    //   });
    //   console.log(this.state.counter);
    // }, 0);
  };
  componentDidMount() {
    //组件挂载完之后执行
    this.timer = setInterval(() => {
      this.setState({ date: new Date() });
    }, 1000);
    //方法3 通过原生事件来修改
    // document.getElementById("test").addEventListener('click',()=>{
    //   this.setState({
    //     counter: this.state.counter + 1
    //   })
    //   console.log(this.state.counter)
    // },false)
  }
  componentWillUnmount() {
    //组件卸载之前完成
    if (this.timer) {
      clearInterval(this.timer);
    }
  }
  render() {
    const { date, counter } = this.state;
    const name = 'react study';
    const user = { firstName: 'tom', lastName: 'jerry' };
    function formateName(user) {
      return user.firstName + ' ' + user.lastName;
    }
    return (
      <div>
        <h1>hello ClassComponent</h1>
        {/* <img src={logo}/> */}
        <br />
        {name ? name : ''}
        <br />
        {formateName(user)}
        <br />
        <p id="test" onClick={this.setCounter}>
          counter: {counter}
        </p>
        <br />
        {date.toLocaleTimeString()}
      </div>
    );
  }
}

export default ClassComponent;
