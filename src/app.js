import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import Main from './components/Main';

const App = () => (
  <Provider store={store}>
    <Main />
  </Provider>
);

ReactDOM.render(<App />, document.getElementById('app'));
