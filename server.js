const express = require("express");
const app = express();
const path = require("path");
const { syncAndSeed, client } = require("./db");
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: false }));

app.get("/", async (req, res, next) => {
  const products = getMotos();
  res.send(`
  <html>
  <head> 
  </head>
  <body><ul> 
  ${(await products)
    .map(
      (ele, idx, arr) => `
 Name: ${arr[idx].title}<br>
 More details: <a href ="/products/${arr[idx].id}">Click here</a> <br>
 About: ${arr[idx].about}<br>
 <img src="${arr[idx].image}"><br> 


  `
    )
    .join("")}
  </body></ul> 
  </html>
  
  
  `);
});

app.get("/products/:id", async (req, res) => {
  //grabs the data element that holds the link's id which matches to the corresponding product id
  //if (!products.data[req.params["id"]]) {
  //res.send(`${products.error}`);
  //const identifier = Object.values(products.data[req.params["id"]]);

  const products = await getMotos();
  const bike = products[req.params.id];
  console.log(products);
  res.send(`<html>
      <head>
          <link rel="stylesheet" href="/style.css" />
      </head> 
      <body id="specifics">
        <header>
          <nav>
              <div class="menu">
              <a href="/">[Products]</a>
              </div>
              <div class="menu"> 
              <h1>The Kawasaki Motors Club</h1>
              </div>
              <div class="menu">
              <a href="/about">About Us</a>
              </div>
          </nav>
          <div id="banner"> 
          <img id="banner-image" src="/banner.jpg"> 
          </div>
      </header>
      <div class="product-list-specific">
        <div> ${bike.about} <div>
        <div> <img id="exactbike" src="${bike.image}"> </div> 
      </div>
      </body> 
      </html>`);
});

//Retrieve table
const getMotos = async () =>
  (await client.query("SELECT * FROM products")).rows;

const bootup = async () => {
  try {
    await client.connect();
    await syncAndSeed();
    const port = process.env.PORT || 3000;
    app.listen(port, () => console.log(`Listening on ${port}`));
  } catch (error) {
    console.log(error);
  }
};

bootup();
