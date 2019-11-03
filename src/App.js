import React, { Component } from 'react';
// import HomePage from './pages/HomePage';
import { Provider, Consumer} from './AppContext';
import UseContextPage from './pages/UseContextPage';
// import UseReducerPage from './pages/UseReducerPage';
// import HocPage from './pages/HocPage';
// import UserPage from './pages/UserPage';
// import HooksPage from './pages/HooksPage';

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
          {/* <Consumer>{ctx => <Child {...ctx} />}</Consumer> */}
          {/* <HomePage/> */}
          {/* <HocPage/> */}
          {/* <UserPage/> */}
          {/* <HooksPage/> */}
          {/* <UseReducerPage/> */}
          <UseContextPage/>
        </Provider>
        {/* <Child {...store}/> */}
      </div>
    );
  }
}

export default App;
