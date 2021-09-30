import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import { List_repository } from '../screens/list_repository/listrepository';


const AppStack = createStackNavigator();

const AppRoutes: React.FC = () => (
  <AppStack.Navigator>
    <AppStack.Screen name="Dashboard" component={List_repository} options ={{ header: () => {}}} />
  </AppStack.Navigator>
);

export default AppRoutes;