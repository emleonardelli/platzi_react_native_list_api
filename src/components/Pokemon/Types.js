import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { capitalize, map } from 'lodash';
import { getColorByPokemonType } from '../../utils/getColorByPokemonType'

const Types = (props) => {
  const { types } = props;
  return (
    <View style={styles.content}>
      {map(types, (item, index) => (
        <View key={index} style={{ ...styles.pill, backgroundColor: getColorByPokemonType(item.type.name)}}>
          <Text>{capitalize(item.type.name)}</Text>
        </View>
      ))}
    </View>
  )
}

export default Types

const styles = StyleSheet.create({
  content: {
    marginTop: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center"
  },
  pill: {
    paddingHorizontal: 30,
    paddingVertical: 5,
    borderRadius: 30,
    marginHorizontal: 10,
  },
});