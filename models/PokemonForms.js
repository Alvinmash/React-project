export default (connection, Sequelize, Forms, Pokemons) => connection.define('PokemonForms', {
  id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
  PokemonPokedexNumber: {
    type: Sequelize.INTEGER,
    references: { model: Pokemons, key: 'pokedexNumber' },
  },
  FormId: {
    type: Sequelize.INTEGER,
    allowNull: false,
    references: { model: Forms, key: 'id' },
  },
}, {
  defaultScope: {
    attributes: { exclude: ['deletedAt'] },
  },
}, {
  paranoid: true,
})
