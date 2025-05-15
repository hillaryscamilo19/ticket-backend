const express = require("express");
const { registerUser, loginUser, getProfile } = require("../controllers/user");

const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/profile", getProfile); // opcional, si usas auth por token

module.exports = router;
