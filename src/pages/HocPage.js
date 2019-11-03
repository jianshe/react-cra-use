import React, { Component } from 'react';

function Child(props) {
  return <div>Child</div>;
}
// 高阶组件，接收一个组件，返回一个组件
const foo = Cmp => props => {
  return (
    <div className="border">
      <Cmp {...props} />
    </div>
  );
};

export default class HocPage extends Component {
  render() {
    const Foo = foo(Child)
    return (
      <div>
        <h1>HocPage</h1>
        <Foo />
      </div>
    );
  }
}
