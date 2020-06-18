import models from '../models'

export const getAllTypes = async (request, response) => {
  try {
    const allTypes = await models.Types.findAll()

    return response.send(allTypes)
  } catch (error) {
    return response.status(500).send('Could not retrieve all the types, please try again.')
  }
}

export const getTypeById = async (request, response) => {
  try {
    const { name } = request.params
    const type = await models.Types.findOne({ where: { name }, include: [{ model: models.Pokemons }] })

    return type
      ? response.status(200).send(type)
      : response.status(404).send(`Could not find the type: ${name}.`)
  } catch (error) {
    return response.status(500).send('Could not retrieve the specified type, please try again.')
  }
}
