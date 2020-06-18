import models from '../models'

export const getAllForms = async (request, response) => {
  try {
    const allForms = await models.Forms.findAll()

    return response.send(allForms)
  } catch (error) {
    return response.status(500).send('Unable to retrieve all the  forms, please try again.')
  }
}

export const getFormById = async (request, response) => {
  try {
    const { name } = request.params
    const Form = await models.Forms.findOne({
      where: { name },
      include: [{ model: models.Pokemons }],
    })

    return Form
      ? response.status(200).send(Form)
      : response.status(404).send(`It appears there is no form called '${name}' does not exist.`)
  } catch (error) {
    return response.status(500).send('Unable to retrieve the  form, please try again.')
  }
}
