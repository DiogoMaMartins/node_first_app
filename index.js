const express = require("express");

const app     = express();

require("./routes/userRoutes")(app);

const PORT    = 5000;

app.listen(PORT, () => {
  console.log(`Server running`);
});

module.exports = app => {
  app.get("/cars", (req, res) => {

    let cars;

    // request data from server and save in cars variable;

    res.send(cars)
  })
};
