const express = require("express");
const controller = require("../controller/SchoolIdentification");

const router = express.Router();

router.get("/search/:inep_id", controller.search);

router.get("/searchAll", controller.searchAll);

router.post("/create", controller.actionCreate);

router.put("/update/:inep_id", controller.update);

router.delete("/delete/:inep_id", controller.delete);

module.exports = router;