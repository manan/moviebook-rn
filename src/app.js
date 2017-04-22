import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import { TabNavigator } from 'react-navigation';
import reducers from './reducers';
import LoginScreen from './scenes/LoginScreen';

const App = () => {
  const Navigator = TabNavigator({
    login: { screen: LoginScreen }
  })
  return (
    <Provider store={createStore(reducers, {}, applyMiddleware(ReduxThunk))}>
      <Navigator />
    </Provider>
  )
}

export default App;
