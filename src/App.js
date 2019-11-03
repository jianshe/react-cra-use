import React, { Component } from 'react';
// import HomePage from './pages/HomePage';
import { Provider, Consumer} from './AppContext';
import HocPage from './pages/HocPage';
function Child(props) {
  return (
    <div>
      <h1>child</h1>
      <p>{props.user.name}</p>
    </div>
  );
}
const store = {
  user: {
    name: '父子组件之间通信'
  }
};
class App extends Component {
  render() {
    return (
      <div className="App">
        <Provider value={store}>
          <Consumer>{ctx => <Child {...ctx} />}</Consumer>
          {/* <HomePage/> */}
          <HocPage/>
        </Provider>
        {/* <Child {...store}/> */}
      </div>
    );
  }
}

export default App;
