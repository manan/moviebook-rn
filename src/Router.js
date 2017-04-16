import React from 'react';
import { Scene, Router } from 'react-native-router-flux';
import LoginScreen from './scenes/LoginScreen';
import HomeScreen from './scenes/HomeScreen';

const RouterComponent = () => {
  return (
    <Router>
      <Scene key="loginScreen" component={LoginScreen} hideNavBar initial />
      <Scene key="homeScreen" component={HomeScreen} hideNavBar />
    </Router>
  );
}

export default RouterComponent;
