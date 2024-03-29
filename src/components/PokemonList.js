import { View, Text, StyleSheet, ActivityIndicator, Platform} from 'react-native'
import React from 'react'
import { FlatList } from 'react-native-gesture-handler';
import PokemonCard from './PokemonCard';

const PokemonList = (props) => {
  const { pokemons, loadPokemons, isNext } = props;

  const loadMore = () => {
    loadPokemons();
  }

  return (
    <FlatList
        data={pokemons}
        numColumns={2}
        showsVerticalScrollIndicator={false}
        keyExtractor={(pokemon) => String(pokemon.id)}
        renderItem={({item}) => <PokemonCard pokemon={item}/>}
        contentContainerStyle={styles.flatListContentContainer}
        onEndReached={isNext && loadMore}
        onEndReachedThreshold={0.1}
        ListFooterComponent={
          isNext && 
          <ActivityIndicator
            size="large"
            style={styles.spinner}
            color="#AEAEAE"
          />
        }
    />
  )
}

export default PokemonList

const styles = StyleSheet.create({
    flatListContentContainer: {
        paddingHorizontal:5,
        marginTop: Platform.OS === 'android' ? 55 : 0,
    },
    spinner: {
      marginTop: 20,
      marginBottom: Platform.OS === 'android' ? 100 : 60,
    }
});