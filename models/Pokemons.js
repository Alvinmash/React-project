export default (connection, Sequelize) => connection.define('Pokemons', {
  pokedexNumber: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
  name: { type: Sequelize.STRING, allowNull: false },
  generationNumber: { type: Sequelize.INTEGER, allowNull: false },
  fromId: { type: Sequelize.INTEGER, allowNull: true },
  isProtected: { type: Sequelize.TINYINT, default: 0 },
}, {
  defaultScope: {
    attributes: { exclude: ['deletedAt'] },
  },
}, {
  paranoid: true,
})
