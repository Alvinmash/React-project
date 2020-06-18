export default (connection, Sequelize, Pokemons, Types) => connection.define('PokemonTypes', {
  PokemonPokedexNumber: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    references: { model: Pokemons, key: 'pokedexNumber' },
  },
  TypeId: { type: Sequelize.INTEGER, allowNull: false, primaryKey: true, references: { model: Types, key: 'id' } },
}, {
  defaultScope: {
    attributes: { exclude: ['deletedAt'] },
  },
}, {
  paranoid: true,
})
