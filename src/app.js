import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducers';
import LoginScreen from './scenes/LoginScreen';

const App = () => {
  return (
    <Provider store={ createStore(reducers) }>
      <LoginScreen />
    </Provider>
  )
}

export default App;
