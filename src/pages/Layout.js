import React, { Component } from "react";
import TopBar from "../components/TopBar";

export default class Layout extends Component {
  componentDidMount() {
    const { title = "商城" } = this.props;
    document.title = title;
  }
  render() {
    const { children, showTopBar } = this.props;
    const a = []; //a arr array
    if (children.$$typeof) { // 不具名插槽
      a.push(children);
    } else {
      //具名
      for (let item in children) {
        a.push(children[item]);
      }
    }
    console.log(this.props);
    return (
      <div>
        {showTopBar && <TopBar />}
        {/* {children.btn}
        {children.txt} */}
        {a.map((item, index) => {
          return <React.Fragment key={index}>{item}</React.Fragment>;
        })}
      </div>
    );
  }
}
