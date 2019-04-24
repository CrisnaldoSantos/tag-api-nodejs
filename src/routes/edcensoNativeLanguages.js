const express = require("express");
const controller = require("../controller/EdcensoNativeLanguages");

const router = express.Router();

router.get("/search/:id", controller.search);

router.get("/searchAll", controller.searchAll);

router.post("/create", controller.actionCreate);

router.put("/update/:id", controller.update);

router.delete("/delete/:id", controller.delete);

module.exports = router;