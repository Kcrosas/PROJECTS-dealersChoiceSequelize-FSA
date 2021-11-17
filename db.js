//Bringing in sequelize
const { DATE } = require("sequelize");
const Sequelize = require("sequelize");
//Pulling out data type and data method
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

//Many to many with use of belongsToMany, resulted in two tables created.
//Not sure how to navi it
Motorcycles.belongsToMany(Customer, {
  through: "purchased",
  foreignkey: "bike",
});
Customer.belongsToMany(Motorcycles, { through: "buyers" });

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
