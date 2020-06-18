import React, { useEffect, useState } from 'react'
import Page from '../components/Page'
import PokemonDetails from '../components/PokemonDetails'
import Title from '../components/Title'

import { retrievePokemonDetails } from '../utils/pokemonDetails'
import NotFound from '../components/NotFound'
import GoHome from '../components/GoHome'

export default ({ location }) => {
  const [pokemonId, setPokemonId] = useState(0)
  const [genNumber, setGenNumber] = useState(0)
  const [pokemonName, setPokemonName] = useState('')
  const [formsList, setFormsList] = useState([])
  const [typesList, setTypesList] = useState([])

  useEffect(() => {
    async function pullData() {
      const {
        pokedexNumber, Forms, name, Types, generationNumber,
      } = await retrievePokemonDetails(location)

      setFormsList(Forms)
      setGenNumber(generationNumber)
      setPokemonName(name)
      setPokemonId(pokedexNumber)
      setTypesList(Types)
    }

    pullData()
  }, [])

  return (
    <Page>
      <Title />
      <GoHome />
      {
        pokemonName
          ? (
            <PokemonDetails
              formsList={formsList}
              genNumber={genNumber}
              pokemonId={pokemonId}
              pokemonName={pokemonName}
              typesList={typesList}
            />
          )
          : <NotFound message="Sorry, it appears the pokemon you are looking for does not exist." />
      }
    </Page>
  )
}
