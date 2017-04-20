import React from 'react';
import { Scene, Router } from 'react-native-router-flux';
import LoginScreen from './scenes/LoginScreen';
import HomeScreen from './scenes/HomeScreen';
import UserProfile from './scenes/UserProfile';
import { NavBar } from './components';

const RouterComponent = () => {
  return (
    <Router>
      <Scene key="auth" hideNavBar >
        <Scene key="loginScreen" component={LoginScreen} initial />
      </Scene>

      <Scene
        key="home"
        navBar={NavBar}
      >
        <Scene key="homeScreen" component={HomeScreen} initial />
        <Scene key="userProfile" component={UserProfile} />
      </Scene>
    </Router>
  );
}

export default RouterComponent;
