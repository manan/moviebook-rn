import React from 'react';
import { Scene, Router } from 'react-native-router-flux';
import LoginScreen from './scenes/LoginScreen';
import HomeScreen from './scenes/HomeScreen';

const RouterComponent = () => {
  return (
    <Router>
      <Scene key="auth" hideNavBar>
        <Scene key="loginScreen" component={LoginScreen} initial />
      </Scene>

      <Scene key="home" hideNavBar >
        <Scene key="homeScreen" component={HomeScreen} initial />
      </Scene>
    </Router>
  );
}

export default RouterComponent;
