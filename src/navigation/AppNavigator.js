import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import LoginScreen from '../screens/LoginScreen';
import ProfileScreen from '../screens/ProfileScreen';
import HomeScreen from '../screens/HomeScreen';
import TaskCreationScreen from '../screens/TaskCreationScreen';
import TaskEditScreen from '../screens/TaskEditScreen';

const AppNavigator = createStackNavigator(
  {
    Login: LoginScreen,
    Profile: ProfileScreen,
    Home: HomeScreen,
    TaskCreation: TaskCreationScreen,
    TaskEdit: TaskEditScreen,
  },
  {
    initialRouteName: 'Login', // Set the initial screen to Login
  }
);

export default createAppContainer(AppNavigator);
