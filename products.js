const productsData = [
  {
    id: 1,
    title: "Kawasaki Ninja 250",
    about: "Displacement: 250cc",
    images: "/Ninja250.jpg",
  },
  {
    id: 1,
    title: "Kawasaki Ninja 300",
    about: "Displacement: 250cc",
    images: "/Ninja250.jpg",
  },
  {
    id: 1,
    title: "Kawasaki Ninja 650",
    about: "Displacement: 250cc",
    images: "/Ninja250.jpg",
  },
  {
    id: 1,
    title: "Kawasaki Ninja ZX6R",
    about: "Displacement: 250cc",
    images: "/Ninja250.jpg",
  },
  {
    id: 1,
    title: "Kawasaki Ninja ZX10R",
    about: "Displacement: 250cc",
    images: "/Ninja250.jpg",
  },
  {
    id: 1,
    title: "Kawasaki Ninja H2R",
    about: "Displacement: 250cc",
    images: "/Ninja250.jpg",
  },
];

const html = `
<html>
    <head>
        <link rel="stylesheet" href="/style.css" />
    </head> 
    <body>
        <h1>This is the products.js html page</h1> 
        <img src="${productsData[0].images}">
    </body> 
</html>
`;

module.exports = { html: html, productsData: productsData };
