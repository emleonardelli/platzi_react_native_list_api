import { View, Text, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import { getPokemonDetailsByIdApi, getPokemonDetailsByUrlApi } from '../api/pokemon';
import Header from '../components/Pokemon/Header';
import Types from '../components/Pokemon/Types';

const Pokemon = (props) => {
  const {navigation, route: {params} } = props;
  const [pokemon, setPokemon] = useState(null);
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
        
      />
    </ScrollView>
  )
}

export default Pokemon