import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import LoginScreen from './pages/LoginScreen';
import ChatScreen from './pages/ChatScreen';

const AppNavigation = createStackNavigator(
  {
    Login: LoginScreen,
    Chat: ChatScreen,
  },
  {
    headerMode: 'none',
  },
);

export default createAppContainer(AppNavigation);
