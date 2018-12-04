module.exports = app => {
 /* app.get("/cars", (req, res) => {

    let cars;

    // request data from server and save in cars variable;

    res.send(cars)
  })*/
  app.get("/users", (req, res) => {
  let users;

  res.send(users);
});
};
