import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';
import LoginScreen from './scenes/LoginScreen';
import ReduxThunk from 'redux-thunk';

const App = () => {
  return (
    <Provider store={ createStore(reducers, {}, applyMiddleware(ReduxThunk)) }>
      <LoginScreen />
    </Provider>
  )
}

export default App;
