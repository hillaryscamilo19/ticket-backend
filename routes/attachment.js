const express = require("express");
const {
  getAttachments,
  uploadAttachment,
  deleteAttachment,
} = require("../controllers/attachmentController");

const router = express.Router();

router.get("/", getAttachments);
router.post("/", uploadAttachment);
router.delete("/:id", deleteAttachment);

module.exports = router;
