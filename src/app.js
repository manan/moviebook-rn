import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import { TabNavigator, DrawerNavigator } from 'react-navigation';
import reducers from './reducers';
import { colors } from './utils';
import LoginScreen from './scenes/LoginScreen';
import HomeScreen from './scenes/HomeScreen';
import SearchScreen from './scenes/SearchScreen';
import NotificationScreen from './scenes/NotificationScreen';
import ProfileScreen from './scenes/ProfileScreen';

const App = () => {
  const mainScreens = {
    Home: { screen: HomeScreen },
    Search: { screen: SearchScreen },
    Notifications: { screen: NotificationScreen },
    Profile: { screen: ProfileScreen }
  }

  const mainFlow = {
    screen: TabNavigator(mainScreens, { tabBarOptions })
  }

  const appFlow = {
    Login: { screen: LoginScreen },
    Main: mainFlow
  }

  const Navigator = DrawerNavigator(appFlow, { navigationOptions: {
    lockMode: 'locked-closed',
    tabBarVisible: false
  } })

  return (
    <Provider store={createStore(reducers, {}, applyMiddleware(ReduxThunk))}>
      <Navigator />
    </Provider>
  )
}

const tabBarOptions = {
  showLabel: false,
  activeTintColor: colors.WHITE,
  inactiveTintColor: colors.THEME_BLACK,
  activeBackgroundColor: colors.THEME_RED,
  inactiveBackgroundColor: colors.THEME_RED
}

export default App;
