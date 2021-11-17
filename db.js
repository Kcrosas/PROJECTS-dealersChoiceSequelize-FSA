//Bringing in sequelize, some datatypes, and a data method
const Sequelize = require("sequelize");
const { STRING, UUID, UUIDV4, INTEGER, DATEONLY } = Sequelize;
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
  title: {
    type: STRING(20),
  },
  about: {
    type: STRING(1000),
  },
  //This will hold the address of the motorcycle images
  image: {
    type: STRING(100),
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
  memberDate: {
    //YYYY-MM-DD
    type: DATEONLY,
  },
});

//Defining table relations

//A motorcycle has one buyer
Motorcycles.belongsTo(Customer, { as: "buyer" });
//A customer can buy multiple motorcycles
Customer.hasMany(Motorcycles, { foreignKey: "buyer" });
//A customer can be cosigner to another customer
Customer.belongsTo(Customer, { as: "cosigner" });
//A customer can cosign multiple customers
Customer.hasMany(Customer, { foreignKey: "cosignerId", as: "benefactor" });

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
