const express = require("express");
const { getDepartament, createDepartament, updateDepartament, deleteDepartament } = require("../controllers/department");

const router = express.Router();

router.get("/", getDepartament);
router.post("/", createDepartament);
router.put("/:id", updateDepartament);
router.delete("/:id", deleteDepartament);

module.exports = router;
