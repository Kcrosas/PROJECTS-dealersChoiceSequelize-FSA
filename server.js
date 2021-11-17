const express = require("express");
const productsData = require("./productAPI");
const app = express();
const path = require("path");
const {
  syncAndSeed,
  models: { Motorcycles, Customer },
} = require("./db");
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: false }));
const about = require("./about");

app.get("/", async (req, res, next) => {
  try {
    const motos = await Motorcycles.findAll();
    res.send(`
    <html>
    <head>
        <link rel="stylesheet" href="/style.css" />
    </head> 
    <body>
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
  <div class="product-list">
    ${motos
      .map(
        (e) => `<div class="item">
    <div><img class="product-image" src="${e.image}"></div> 
    <div class="product-title"><h3>${e.title}</h3></div> 
    <div class='link'><a href="/products/${e.id - 1}">Product Details</a></div>
    </div>`
      )
      .join("")}</div></body></html>
    `);
  } catch (error) {
    console.log(error);
  }
});

app.get("/buyers", async (req, res) => {
  //const bike = products[req.params.id];
  try {
    res.send(
      await Customer.findAll({
        include: [
          { model: Customer, as: "cosigner" },
          { model: Customer, as: "benefactor" },
        ],
      })
    );
  } catch (error) {
    console.log(error);
  }
});

app.get("/motorcycles", async (req, res) => {
  //const bike = products[req.params.id];
  try {
    res.send(await Motorcycles.findAll());
  } catch (error) {
    console.log(error);
  }
});

//Establish about route
app.get("/about", (req, res) => {
  res.send(about.html);
});

const bootup = async () => {
  try {
    await syncAndSeed();

    const [moe, lucy, larry] = await Promise.all([
      //Note: dateOnly takes a string in the format "YYYY-MM-DD"
      Customer.create({ name: "moe", memberDate: "2020-12-02" }),
      Customer.create({ name: "lucy", memberDate: "2020-12-04" }),
      Customer.create({ name: "larry", memberDate: "2020-12-03" }),
      productsData.forEach((e) => {
        Motorcycles.create({
          title: e.title,
          about: e.about,
          image: e.images,
        });
      }),
    ]);
    await Motorcycles.update(
      { buyerId: moe.id },
      { where: { title: "Kawasaki Ninja 300" } }
    );
    await Motorcycles.update(
      { buyerId: moe.id },
      { where: { title: "Kawasaki Ninja 250" } }
    );
    await Motorcycles.update(
      { buyerId: larry.id },
      { where: { title: "Kawasaki Ninja 650" } }
    );
    await Motorcycles.update(
      { buyerId: lucy.id },
      { where: { title: "Kawasaki Ninja ZX6R" } }
    );
    await Customer.update({ cosignerId: lucy.id }, { where: { name: "moe" } });

    const port = process.env.PORT || 3000;
    app.listen(port, () => console.log(`Listening on ${port}`));
  } catch (error) {
    console.log(error);
  }
};

bootup();
