import React from 'react';
import { Scene, Router } from 'react-native-router-flux';
import LoginScreen from './scenes/LoginScreen';
import HomeScreen from './scenes/HomeScreen';
import { colors } from './utils';
import { Header } from './components';

const RouterComponent = () => {
  return (
    <Router>
      <Scene
        key="auth"
        navigationBarStyle={{ backgroundColor: colors.DARK_GREY }}
        renderTitle={() => <Header />}
      >
        <Scene key="loginScreen" component={LoginScreen} initial />
      </Scene>

      <Scene
      key="home"
        navigationBarStyle={{ backgroundColor: colors.DARK_GREY }}
        renderTitle={() => <Header />}
      >
        <Scene key="homeScreen" component={HomeScreen} initial />
      </Scene>
    </Router>
  );
}

export default RouterComponent;
