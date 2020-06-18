import { fetchPokemon } from '../actions/pokemons'

export const filterPokemon = (list, term) => list.filter(pokemon => (
  pokemon.name.toLowerCase().includes(term.toLowerCase())
))

export const retrievePokemon = async () => {
  const pokemonList = await fetchPokemon()

  return pokemonList
}
