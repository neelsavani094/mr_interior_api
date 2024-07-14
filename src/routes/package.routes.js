const express = require("express");
const router = express.Router();

const packageController = require("../controllers/package.controller");
router.post("/", packageController.createPackage);
router.get("/", packageController.getPackages);
router.get("/:id", packageController.getPackageById);
router.put("/:id", packageController.updatePackage);
router.delete("/:id", packageController.deletePackage);

module.exports = router;