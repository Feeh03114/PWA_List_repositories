import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Welcome } from '../screens/Welcome';


const AuthStack = createStackNavigator();

const AuthRoutes: React.FC = () => (
  <AuthStack.Navigator>
    <AuthStack.Screen name="SignIn" component={Welcome}  options ={{ header: () => {}}}/>
  </AuthStack.Navigator>
);

export default AuthRoutes;