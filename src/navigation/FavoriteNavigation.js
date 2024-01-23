import { View, Text } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Favorite from '../screens/Favorite';

const FavoriteNavigation = () => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator>
        <Stack.Screen name="Favorite" component={Favorite} options={{title: 'Favoritos'}} />
    </Stack.Navigator>
  )
}

export default FavoriteNavigation