//Bringing in sequelize
const Sequelize = require("sequelize");
//Pulling out data type and data method
const { STRING, UUID, UUIDV4, INTEGER } = Sequelize;
//Establishing db connection and constructor
const conn = new Sequelize(
  process.env.DATABASE_URL || "postgres://localhost/motorcycles"
);

//Defining first table
const Motorcycles = conn.define("motorcycle", {
  id: {
    type: INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: STRING(20),
  },
});

//Defining customer table
const Customer = conn.define("customer", {
  id: {
    type: UUID,
    primaryKey: true,
    defaultValue: UUIDV4,
  },
  name: {
    type: STRING(20),
  },
});

//Initial seeder
const syncAndSeed = async () => {
  await conn.sync({ force: true });
};

//Export of function and models
module.exports = {
  syncAndSeed,
  models: {
    Motorcycles,
    Customer,
  },
};
