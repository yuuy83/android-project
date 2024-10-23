import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Login from './login/login';

const App = () => {
  return (
    <NavigationContainer>
      <Login />
    </NavigationContainer>
  );
};

export default App;
