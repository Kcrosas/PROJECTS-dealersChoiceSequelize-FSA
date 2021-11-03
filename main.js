//Standard dependecies/installations
const express = require("express");
const morgan = require("morgan");
const path = require("path");
const html = require("html-template-tag");
const app = express();
app.use(morgan("dev"));
app.use(express.static(path.join(__dirname, "public")));
//'require' custom modules
const products = require("./products");
const about = require("./about");

//Establish main route
app.get("/", (req, res) => {
  //Grabs motorcycle products module list to populate an all product list
  res.send(`${products.html}`);
});

//Establish product specific route
app.get("/products/:id", (req, res) => {
  //grabs the data element that holds the link's id which matches to the corresponding product id
  if (!products.data[req.params["id"]]) {
    res.send(`${products.error}`);
  } else {
    const identifier = Object.values(products.data[req.params["id"]]);
    const aboutBike = identifier[2];
    const titleBike = identifier[1];
    const imageBike = identifier[3];
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
      <div> ${aboutBike} <div>
      <div> <img id="exactbike" src="${imageBike}"> </div> 
    </div>
    </body> 
    </html>`);
  }
});

//Establish about route
app.get("/about", (req, res) => {
  res.send(about.html);
});

//Establish port access
const PORT = 3000;
app.listen(PORT, () => console.log(`Port is set to: ${PORT}`));
