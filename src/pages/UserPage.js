import React, { Component } from "react";
import Layout from "./Layout";
export default class UserPage extends Component {
  render() {
    return (
      <Layout showTopBar={true} title="用户中心">
        {/* <div>
          <h1>UserPage</h1>
        </div> */}
        {
          {
            btn:<button type="button">按钮</button>,
            txt: <p>方案</p>
          }
        }
      </Layout>
    );
  }
}
