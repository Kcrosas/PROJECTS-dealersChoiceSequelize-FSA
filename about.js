const html = `
<html>
    <head>
        <link rel="stylesheet" href="/style.css" />
    </head>
    <body>
    <header>
        <nav>
            <div class="menu">
            <a href="/">Products</a>
            </div>
            <div class="menu"> 
            <h1>The Kawasaki Motors Club</h1>
            </div>
            <div class="menu">
            <a href="/about">[About Us]</a>
            </div>
        </nav>
        <div id="banner"> 
        <img id="banner-image" src="/banner.jpg"> 
        </div>
  </header>
        <h1>This is the about page</h1> 
        <img src="/Ninja250.jpg">
    </body>
</html>`;

module.exports = { html: html };
