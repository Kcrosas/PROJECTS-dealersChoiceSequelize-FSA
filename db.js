const { Client } = require("pg");
const client = new Client(
  process.env.DATABASE_URL || "postgres://localhost/motorcycles"
);

const syncAndSeed = async () => {
  const SQL = `
    DROP TABLE IF EXISTS products; 
    CREATE TABLE products (
        id SERIAL PRIMARY KEY, 
        title VARCHAR(30), 
        about VARCHAR(1000), 
        image VARCHAR(100));
        
    INSERT INTO products (title, about, image) VALUES ('Kawasaki Ninja 250', 'The Kawasaki Ninja 250R is a motorcycle in the Ninja sport bike series from the Japanese manufacturer Kawasaki originally introduced in 1986. As the marques entry-level sport bike, the motorcycle has undergone few changes throughout its quarter-century lifetime, having received only three substantial redesigns.', '/Ninja250.jpg'); 
    
    INSERT INTO products (title, about, image) VALUES ('Kawasaki Ninja 300', 'The Kawasaki Ninja 300, or EX300, is a 296 cc Ninja series sport bike introduced by Kawasaki in 2012 for the 2013 model year. It is sold in Asia, Australia, Europe, and North America. When introduced, the Ninja 300R replaced the Ninja 250R in some markets, and in others they were sold alongside each other.', '/Ninja300.jpg'); 
  
    INSERT INTO products (title, about, image) VALUES ('Kawasaki Ninja 650', 'The Kawasaki Ninja 650R, also called ER-6f or EХ-6, is a motorcycle in the Ninja series from the Japanese manufacturer Kawasaki sold since 2006. The 2012 model drops the R suffix from its name. It is a middleweight, parallel-twin engined motorcycle, designed for normal use on paved roads.', '/Ninja650.jpg'); 
  
    INSERT INTO products (title, about, image) VALUES ('Kawasaki Ninja ZX6R', 'The Kawasaki Ninja ZX-6R is a 600 cc class motorcycle in the Ninja sport bike series from the Japanese manufacturer Kawasaki. It was introduced in 1995, and has been constantly updated throughout the years in response to new products from Honda, Suzuki, and Yamaha', '/NinjaZX6R.jpg'); 
  
    INSERT INTO products (title, about, image) VALUES ('Kawasaki Ninja ZX10R', 'The Kawasaki Ninja ZX-10R is a motorcycle in the Ninja sport bike series from the Japanese manufacturer Kawasaki, the successor to the Ninja ZX-9R. It was originally released in 2004 and has been updated and revised throughout the years. It combines an ultra-narrow chassis, low weight, and radial brakes.', '/NinjaZX10R.jpg'); 
  
    INSERT INTO products (title, about, image) VALUES ('Kawasaki Ninja H2R', 'The Kawasaki Ninja H2 is a supercharged supersport class motorcycle in the Ninja sportbike series, manufactured by Kawasaki Heavy Industries, featuring a variable-speed centrifugal-type supercharger.The track-only variant is called Ninja H2R, and it is the fastest and most powerful production motorcycle on the market; it produces a maximum of 310 horsepower (230 kW) and 326 horsepower (243 kW) with ram air.The H2R has 50% more power than the fastest street-legal motorcycles, while the street-legal Ninja H2 has a lower power output of 200 hp (150 kW)–210 hp (160 kW) with ram air', '/NinjaH2R.jpg'); 
  
    `;
  console.log("This is gadfadfdfood");
  await client.query(SQL);
};

module.exports = {
  syncAndSeed,
  client,
};
