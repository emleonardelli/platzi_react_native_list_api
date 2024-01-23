import { View, Text } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Pokedex from '../screens/Pokedex';
import Pokemon from '../screens/Pokemon';

const PokedexNavigation = () => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator>
        <Stack.Screen
          name="Pokedex"
          component={Pokedex}
          options={{
            title: '',
            headerTransparent: true
          }}
        />
        <Stack.Screen
          name="Pokemon"
          component={Pokemon}
          options={{
            title: '',
            headerTransparent: true
          }}
        />
    </Stack.Navigator>
  )
}

export default PokedexNavigation