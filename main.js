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
  //Grabs product id through use of externalModule.find(req.params.id)

  if (motorcycle.id) {
    res.send("This is the product specific page");
  } else res.send(404);
});

//Establish about route
app.get("/about", (req, res) => {
  res.send(about.html);
});

//Establish port access
const PORT = 3000;
app.listen(PORT, () => console.log(`Port is set to: ${PORT}`));
