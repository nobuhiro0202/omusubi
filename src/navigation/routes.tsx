import React, { FC } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Feather } from '@expo/vector-icons';

/**component */
import Home from '../screens/Search';
import History from '../screens/History';

const Tab = createBottomTabNavigator();

const Routes: FC = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Search') {
            iconName = 'search'
          } else if (route.name === 'History') {
            iconName = 'clock';
          }

          return <Feather name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
      })}>
      <Tab.Screen
        name='Search'
        component={Home}
      />
      <Tab.Screen
        name='History'
        component={History}
      />
    </Tab.Navigator>
  );
};

export default Routes;