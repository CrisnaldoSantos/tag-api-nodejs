const http = require("http");
const express = require("express");
const status = require("http-status");
const edcensoNLRoute = require("./routes/edcensoNativeLanguages");
const edcensoCATRoute = require("./routes/edcensoComplementaryActivityType");
const sequelize = require("./database/database");

const app = express();

app.use(express.json());
app.use("/edcensoNL",edcensoNLRoute);
app.use("/edcensoCAT",edcensoCATRoute);
app.use((request, response, next) => {
  response.status(status.NOT_FOUND).send();
});

app.use((error, request, response, next) => {
  response.status(status.INTERNAL_SERVER_ERROR).json({ error });
});

sequelize.sync({ force: false }).then(() => {
  const port = 3000;

  app.set("port", port);

  const server = http.createServer(app);

  server.listen(port);
});
