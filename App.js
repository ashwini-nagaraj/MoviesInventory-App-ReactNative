import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {MaterialCommunityIcons} from '@expo/vector-icons'

import Home from './screens/home'
import MovieDetails from './screens/movie-details'

import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

const Tab = createMaterialBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
      swipeEnabled
      initialRoute="Home"
      activeColor="#FF0000"
      inactiveColor="#dedede"
      style={{ backgroundColor: '#000'}}
      barStyle={{ backgroundColor: '#0f0f0f', padding: 4}}
      >
          <Tab.Screen 
          name="Movies Inventory App"
          component={Home} 
          options={{
            tabBarLabel: 'Home', 
            tabBarIcon: ({ focused , color}) =>  (
              focused
              ? <MaterialCommunityIcons name="home" color={color} size={28} />
              : <MaterialCommunityIcons name="arrow-left" color={color} size={28} />
           )
          }}
           />
          <Tab.Screen
          name="Movie Description"
          component={MovieDetails}    
          options={{
            tabBarLabel: 'Movie Description', 
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="camera-metering-spot" color={color} size={28} />
            ),
          }}
           />
      </Tab.Navigator>
    </NavigationContainer>
  );
}


export default App;