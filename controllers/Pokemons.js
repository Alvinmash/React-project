import models from '../models'

export const getAllPokemon = async (request, response) => {
  try {
    const allPokemon = await models.Pokemons.findAll()

    return response.send(allPokemon)
  } catch (error) {
    return response.status(500).send('Could not retrieve all pokemon, please try again.')
  }
}

export const getPokemonById = async (request, response) => {
  try {
    const { name } = request.params
    const pokemon = await models.Pokemons.findOne({
      where: { name },
      include: [
        { model: models.Forms },
        { model: models.Types },
      ],
    })

    return pokemon
      ? response.status(200).send(pokemon)
      : response.status(404).send(`Could not find the pokemon ${name}.`)
  } catch (error) {
    return response.status(500).send('Could not retrieve the pokemon, please try again.')
  }
}

export const getPokemonByGenerationId = async (request, response) => {
  try {
    const { id } = request.params
    const allPokemonInGeneration = await models.Pokemons.findAll({ where: { generationNumber: id } })

    return allPokemonInGeneration.length
      ? response.send(allPokemonInGeneration)
      : response.status(404).send(`No generation ${id} pokemon currently exists.`)
  } catch (error) {
    return response.status(500).send('Could not retrieve the pokemon by the sepcified generation, please try again.')
  }
}

export const saveNewPokemon = async (request, response) => {
  try {
    const {
      name,
      generationNumber,
      types,
    } = request.body
    const isProtected = request.body.isProtected || 0
    const fromId = request.body.fromId.toLowerCase() === 'null'
      ? null
      : request.body.fromId

    if (!name || !generationNumber) {
      return response
        .status(400)
        .send('At least one of the following attributes is missing: pokedexNumber, name, or generationNumber')
    }

    const [savedPokemon, created] = await models.Pokemons.findOrCreate({
      where: { name },
      defaults: { generationNumber, fromId, isProtected },
    })

    Promise.resolve(savedPokemon)

    if (created) {
      const promisedTypesId = types.map(async (typeName) => {
        const [type] = await models.Types.findOrCreate({ where: { name: typeName } })

        return type.id
      })

      const typesId = await Promise.all(promisedTypesId)
      const { pokedexNumber } = savedPokemon

      typesId.map(async (typeId) => {
        const promisedPokemonType = await models.PokemonTypes.findOrCreate({
          where: { PokemonPokedexNumber: pokedexNumber },
          defaults: { TypeId: typeId },
        })

        const pokemonType = Promise.resolve(promisedPokemonType)

        return pokemonType
      })
    }

    return response.status(201).send(savedPokemon)
  } catch (error) {
    return response.status(500).send('Could not reach the database, please try again.')
  }
}

export const deletePokemon = async (request, response) => {
  try {
    const { name } = request.params

    const pokemon = await models.Pokemons.findOne({ where: { name } })

    if (!pokemon) return response.status(404).send(`No pokemon matching the name: ${name}`)

    if (pokemon.isProtected) return response.status(409).send('Cannot delete protected pokemon')

    await models.PokemonTypes.destroy({ where: { PokemonPokedexNumber: pokemon.pokedexNumber } })
    await models.Pokemons.destroy({ where: { name } })

    return response.send(`Successfully deleted the pokemon: ${name}.`)
  } catch (error) {
    return response.status(500).send('Unknown error while deleting pokemon, please try again.')
  }
}
