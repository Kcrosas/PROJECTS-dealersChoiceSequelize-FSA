const productsData = [
  {
    id: 1,
    title: "Kawasaki Ninja 250",
    about:
      "The Kawasaki Ninja 250R is a motorcycle in the Ninja sport bike series from the Japanese manufacturer Kawasaki originally introduced in 1986. As the marque's entry-level sport bike, the motorcycle has undergone few changes throughout its quarter-century lifetime, having received only three substantial redesigns.",
    images: "/Ninja250.jpg",
  },
  {
    id: 2,
    title: "Kawasaki Ninja 300",
    about:
      "The Kawasaki Ninja 300, or EX300, is a 296 cc Ninja series sport bike introduced by Kawasaki in 2012 for the 2013 model year. It is sold in Asia, Australia, Europe, and North America. When introduced, the Ninja 300R replaced the Ninja 250R in some markets, and in others they were sold alongside each other.",
    images: "/Ninja300.jpg",
  },
  {
    id: 3,
    title: "Kawasaki Ninja 650",
    about:
      "The Kawasaki Ninja 650R, also called ER-6f or EХ-6, is a motorcycle in the Ninja series from the Japanese manufacturer Kawasaki sold since 2006. The 2012 model drops the R suffix from its name. It is a middleweight, parallel-twin engined motorcycle, designed for normal use on paved roads. ",
    images: "/Ninja650.jpg",
  },
  {
    id: 4,
    title: "Kawasaki Ninja ZX6R",
    about:
      "The Kawasaki Ninja ZX-6R is a 600 cc class motorcycle in the Ninja sport bike series from the Japanese manufacturer Kawasaki. It was introduced in 1995, and has been constantly updated throughout the years in response to new products from Honda, Suzuki, and Yamaha",
    images: "/NinjaZX6R.jpg",
  },
  {
    id: 5,
    title: "Kawasaki Ninja ZX10R",
    about:
      "The Kawasaki Ninja ZX-10R is a motorcycle in the Ninja sport bike series from the Japanese manufacturer Kawasaki, the successor to the Ninja ZX-9R. It was originally released in 2004 and has been updated and revised throughout the years. It combines an ultra-narrow chassis, low weight, and radial brakes.",
    images: "/NinjaZX10R.jpg",
  },
  {
    id: 6,
    title: "Kawasaki Ninja H2R",
    about:
      "The Kawasaki Ninja H2 is a supercharged supersport class motorcycle in the Ninja sportbike series, manufactured by Kawasaki Heavy Industries, featuring a variable-speed centrifugal-type supercharger.The track-only variant is called Ninja H2R, and it is the fastest and most powerful production motorcycle on the market; it produces a maximum of 310 horsepower (230 kW) and 326 horsepower (243 kW) with ram air.The H2R has 50% more power than the fastest street-legal motorcycles, while the street-legal Ninja H2 has a lower power output of 200 hp (150 kW)–210 hp (160 kW) with ram air",
    images: "/NinjaH2R.jpg",
  },
];

const html = `
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
        ${productsData
          .map(
            (item) => `
          <div class="item">
                <div><img class="product-image" src="${item.images}"></div>
                  <div class="product-title"><h2>${item.title}</h2></div> 
                   
                  <div class="link"><a href="/products/${item.id}">Product Details</a></div>
          </div>`
          )
          .join("")}
  </div>
    </body> 
</html>
`;

const error = `
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
      <p> Error: Product not found </p> 
  </div>
    </body> 
</html>
`;

module.exports = { html: html, data: productsData, error: error };
