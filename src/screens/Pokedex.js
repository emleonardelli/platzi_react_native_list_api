import { SafeAreaView, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import { getPokemonDetailsByUrlApi, getPokemonsApi } from '../api/pokemon';
import PokemonList from '../components/PokemonList';

const Pokedex = () => {
  const [pokemons, setPokemons] = useState([]);
  const [nextUrl, setNextUrl] = useState(null);
  useEffect(() => {
    (async ()=>{
      await loadPokemons();
    })()

  },[]);

  const loadPokemons = async () => {
    try {
      const res = await getPokemonsApi(nextUrl);
      setNextUrl(res.next);
      const pokemonsArray = [];
      for await (const pokemon of res.results) {
        const pokemonDetail = await getPokemonDetailsByUrlApi(pokemon.url);
        pokemonsArray.push({
          id: pokemonDetail.id,
          name: pokemonDetail.name,
          type: pokemonDetail.types[0].type.name,
          order: pokemonDetail.order,
          image: pokemonDetail.sprites.other['official-artwork'].front_default
        });
      }
      setPokemons([...pokemons, ...pokemonsArray]);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <SafeAreaView>
      <PokemonList
        pokemons={pokemons}
        loadPokemons={loadPokemons}
        isNext={nextUrl}
      />
    </SafeAreaView>
  )
}

export default Pokedex