import React from 'react';
import { Scene, Router } from 'react-native-router-flux';
import LoginScreen from './scenes/LoginScreen';

const RouterComponent = () => {
  return (
    <Router>
      <Scene key="login" component={LoginScreen} hideNavBar />
    </Router>
  );
}

export default RouterComponent;
