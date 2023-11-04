import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './src/screens/LoginScreen';
import ProfileScreen from './src/screens/ProfileScreen';
import HomeScreen from './src/screens/HomeScreen';
import TaskCreationScreen from './src/screens/TaskCreationScreen';
import TaskEditScreen from './src/screens/TaskEditScreen';
import { login } from './src/utils/api';
const Stack = createNativeStackNavigator();

const App = () => {
  const [access_token, setAccessToken] = useState(null);

  const handleLogin = async (email, password) => {
    try {
      const tokens = await login(email, password);
      setAccessToken(tokens.access_token);
    } catch (error) {
      console.error(error);
    }
  };

  const handleLogout = () => {
    setAccessToken(null);
  };

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {access_token ? (
          <>
            <Stack.Screen
              name="Home"
              component={HomeScreen}
              initialParams={{ access_token }}
              options={{ title: 'Home' }}
            />
            <Stack.Screen
              name="TaskCreation"
              component={TaskCreationScreen}
              options={{ title: 'Create Task' }}
            />
            <Stack.Screen
              name="TaskEdit"
              component={TaskEditScreen}
              options={{ title: 'Edit Task' }}
            />
            <Stack.Screen
              name="Profile"
              options={{ title: 'Profile' }}
            >
              {(props) => <ProfileScreen {...props} access_token={access_token} onLogout={handleLogout} />}
            </Stack.Screen>
          </>
        ) : (
          <Stack.Screen
            name="Login"
            options={{ title: 'Login' }}
          >
            {(props) => <LoginScreen {...props} onLogin={handleLogin} />}
          </Stack.Screen>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
