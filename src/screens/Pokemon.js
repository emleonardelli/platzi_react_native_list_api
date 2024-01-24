import { View, Text, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import { getPokemonDetailsByIdApi, getPokemonDetailsByUrlApi } from '../api/pokemon';
import Header from '../components/Pokemon/Header';
import Types from '../components/Pokemon/Types';
import Stats from '../components/Pokemon/Stats';
import Icon from 'react-native-vector-icons/FontAwesome5';

const Pokemon = (props) => {
  const {navigation, route: {params} } = props;
  const [pokemon, setPokemon] = useState(null);

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => null,
      headerLeft: () => <Icon
        name="arrow-left"
        color="#FFF"
        size={20}
        style={{ marginLeft: 20 }}
        onPress={navigation.goBack}
      />
    });
  },[navigation, params]);

  useEffect(()=>{
    (async ()=>{
      try {
        const res = await getPokemonDetailsByIdApi(params.id);
        setPokemon(res);
      } catch (error) {
        navigation.goBack();
      }
    })()
  },[params]);

  if (!pokemon) return null;

  return (
    <ScrollView>
      <Header
        name={pokemon.name}
        order={pokemon.order}
        image={pokemon.sprites.other["official-artwork"].front_default}
        type={pokemon.types[0].type.name}
      />
      <Types
        types={pokemon.types}
      />
      <Stats
        stats={pokemon.stats}
      />
    </ScrollView>
  )
}

export default Pokemon