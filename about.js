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
        <div class='product-list'><h2>Welcome to the Kawasaki Motors Club</h2> <p>Here, you'll find a number of well known (some very much iconic) motorcycles from Kawasaki. At this moment, our club sells all products except the H2R which is reserved for only our professional motorists.</p><p>Personally, I have owned a 250R and the 650R. They are both beginner friendly and are incredibly forgiving. Accidentally dropping your cluth on either WONT cause you to do a wheelie and although it's quite limited on the top end, its acceleration is still very good for a motorcycle.</p></div>
    </body>
</html>`;

module.exports = { html: html };
