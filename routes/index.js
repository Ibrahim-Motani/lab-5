const peopleRoutes = require("./peopleApi");
const workRoutes = require("./workApi");

const constructorMethod = app => {
  app.use("/people", peopleRoutes);
  app.use("/work", workRoutes);

  app.use("*", (req, res) => {
    res.status(404).json({ error: "Not found" });
  });
};

module.exports = constructorMethod;
