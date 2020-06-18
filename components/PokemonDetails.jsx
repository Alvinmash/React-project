import React from 'react'
import styled from 'styled-components'
import Forms from './Forms'
import Types from './Types'

import returnImagePathString from '../helpers/returnImagePath'

const PokemonPage = styled.div`
  font-size: 24px;
  text-align: center;
`

const PokemonImage = styled.img`
  margin: 10px 0;
`

export default ({
  formsList,
  genNumber,
  pokemonId,
  pokemonName,
  typesList,
}) => (
  <PokemonPage>
    <div>
      {
        pokemonId < 100
          ? `#0${pokemonId}: ${pokemonName}`
          : `#${pokemonId}: ${pokemonName}`
      }
    </div>
    <PokemonImage src={returnImagePathString(genNumber, pokemonName)} alt={pokemonName} />
    <div>{`Generation: ${genNumber}`}</div>
    <div>
      <Types typesList={typesList} />
    </div>
    <div>
      {
        formsList.length
          ? (<Forms formsList={formsList} />)
          : 'Currently, there are no known alternative forms for this Pokemon.'
      }
    </div>
  </PokemonPage>
)
