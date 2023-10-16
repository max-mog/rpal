const express = require("express");
const app = express();
const port = process.env.PORT || 3001;

app.get("/", (req, res) => res.type('html').send(html));

const server = app.listen(port, () => console.log(`Example app listening on port ${port}!`));

server.keepAliveTimeout = 120 * 1000;
server.headersTimeout = 120 * 1000;

const html = `
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="description" content="We are buikding our app in stealth mode.">
  <meta name="keywords" content="">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">

  <link rel="icon" type="image/png" sizes="32x32" href="images/favicon-32x32.png">
  <link rel="stylesheet" href="styles.css">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css"
    integrity="sha512-9usAa10IRO0HhonpyAIVpjrylPvoDwiPUiKdWk5t3PyolY1cOd4DSE0Ga+ri4AuTroPR5aQvXU9xC6qOPnzFeg=="
    crossorigin="anonymous" referrerpolicy="no-referrer" />
  <title>RoadPal AI</title>


</head>

<body>
  <!-- Main Container -->
  <main>
    <!-- Header Logo -->
    <div class="header-logo"></div>
    <!-- Title Section -->
    <article class="title-section">
      <!-- <h1>Car Maintenance Scheduler!</h1> -->
      
      <p><span class="soon">Streamlining vehicle upkeep with timely maintenance reminders.</span></p>
      <p class="title-info">Coming soon!</p>
    </article>

      <!-- Statistics IMG-->
      <div class="statistics-img"></div>
    </article>
  </main>
  <!-- Footer -->
  <footer>
    <!-- Copyright -->
    <p class="copyright"> &copy; Copyright RoadPal. All rights reserved.</p>
  </footer>

  <script src="app.js"></script>

</body>

</html>
`
