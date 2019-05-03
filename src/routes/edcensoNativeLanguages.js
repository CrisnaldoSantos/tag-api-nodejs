const express = require("express");
const controller = require("../controller/EdcensoNativeLanguages");

const routerENL = express.Router();

routerENL.get("/search/:id", controller.search);

routerENL.get("/searchAll", controller.searchAll);

routerENL.post("/create", controller.actionCreate);

routerENL.put("/update/:id", controller.update);

routerENL.delete("/delete/:id", controller.delete);

module.exports = routerENL;