export default (connection, Sequelize) => connection.define('Types', {
  id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
  name: { type: Sequelize.STRING, allowNull: false },
}, {
  defaultScope: {
    attributes: { exclude: ['deletedAt'] },
  },
}, {
  paranoid: true,
})
