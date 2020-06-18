import React, { useEffect, useState } from 'react'
import Page from '../components/Page'
import Pokemon from '../components/Pokemon'
import SearchBar from '../components/SearchBox'
import Title from '../components/Title'

import { filterPokemon, retrievePokemon } from '../utils/pokemons'

export default () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [pokemonList, setPokemonList] = useState([])
  const [filteredPokemonList, setFilteredPokemonList] = useState([])

  useEffect(() => {
    async function pullPokemon() {
      const retrievedList = await retrievePokemon()

      setPokemonList(retrievedList)
      setFilteredPokemonList(retrievedList)
    }

    pullPokemon()
  }, [])

  useEffect(() => {
    const filtered = filterPokemon(pokemonList, searchTerm)

    setFilteredPokemonList(filtered)
  }, [searchTerm])

  return (
    <Page>
      <Title />
      <SearchBar term={searchTerm} setter={setSearchTerm} />
      {
        filteredPokemonList
          ? filteredPokemonList.map(pokemon => (
            <Pokemon key={pokemon.pokedexNumber} name={pokemon.name} />
          ))
          : (<div>Nothing here</div>)
      }
    </Page>
  )
}
