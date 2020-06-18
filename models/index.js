import Sequelize from 'sequelize'
import PokemonsModel from './Pokemons'
import FormsModel from './Forms'
import TypesModel from './Types'
import PokemonFormsModel from './PokemonForms'
import PokemonTypesModel from './pokemonTypes'
import allConfigs from '../configs/sequelize'

const environment = process.env.NODE_ENV || 'development'
const config = allConfigs[environment]

const connection = new Sequelize(config.database, config.username, config.password, {
  host: config.host, dialect: config.dialect,
})

const Pokemons = PokemonsModel(connection, Sequelize)
const Forms = FormsModel(connection, Sequelize)
const Types = TypesModel(connection, Sequelize)
const PokemonForms = PokemonFormsModel(connection, Sequelize, Forms, Pokemons)
const PokemonTypes = PokemonTypesModel(connection, Sequelize, Pokemons, Types)

Pokemons.belongsToMany(Types, { through: PokemonTypes })
Types.belongsToMany(Pokemons, { through: PokemonTypes })

Pokemons.belongsToMany(Forms, { through: PokemonForms })
Forms.belongsToMany(Pokemons, { through: PokemonForms })

module.exports = {
  Pokemons,
  Forms,
  Types,
  PokemonForms,
  PokemonTypes,
  Op: Sequelize.Op,
}
