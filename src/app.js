const http = require("http");
const express = require("express");
const status = require("http-status");
const schoolRoute = require("./routes/schoolIdentification");
const edcensoLanguegesRoute = require("./routes/edcensoNativeLanguages");
const schollStructureRoute = require("./routes/schoolStructure");
const sequelize = require("./database/database");

const app = express();

app.use(express.json());

app.use("/schoolIdentification", schoolRoute);
app.use("/edcensoNativeLanguages", edcensoLanguegesRoute);
app.use("/schoolStructure", schollStructureRoute);
app.use((request, response, next) => {
  response.status(status.NOT_FOUND).send();
});

app.use((error, request, response, next) => {
  response.status(status.INTERNAL_SERVER_ERROR).json({ error });
});

sequelize.sync({ force: true }).then(() => {
  const port = process.env.PORT || 3000;

  app.set("port", port);

  const server = http.createServer(app);
  console.log("Serviço em execução")
  server.listen(port);
});
