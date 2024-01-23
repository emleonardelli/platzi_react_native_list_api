import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import Icon from 'react-native-vector-icons/FontAwesome5';
import { Image } from 'react-native';
import FavoriteNavigation from './FavoriteNavigation';
import PokedexNavigation from './PokedexNavigation';
import AccountNavigation from './AccountNavigation';

const Navigation = () => {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator>
        <Tab.Screen
          name="Favorite"
          options={{
            tabBarLabel: "Favoritos",
            headerShown: false,
            tabBarIcon: ({ color, size }) => <Icon name="heart" color={color} size={size}/>
          }}
          component={FavoriteNavigation}/>
        <Tab.Screen
          name="Pokedex"
          options={{
            tabBarLabel: "",
            headerShown: false,
            tabBarIcon: () => renderPokeball()
          }}
          component={PokedexNavigation}/>
        <Tab.Screen
          name="Account"
          options={{
            tabBarLabel: "Mi Cuenta",
            headerShown: false,
            tabBarIcon: ({ color, size }) => <Icon name="user" color={color} size={size}/>
          }}
          component={AccountNavigation}/>
    </Tab.Navigator>
  )
}

const renderPokeball = () => <Image 
    source={require('../assets/pokeball.png')}
    style={{
      width: 75,
      height: 75,
      top: -15
    }}
  />

export default Navigation