module.exports = {
  username: 'postgres',
  password: 'admin',
  database: 'appBarberGoNode',
  host: '127.0.0.1',
  dialect: 'postgres',
  operatorAliases: false,
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true
  }
}

// node_modules\.bin\sequelize migration:create --name=sessions
// node_modules\.bin\sequelize db:migrate
