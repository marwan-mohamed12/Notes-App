const express = require("express");
const {
    getAllNotes,
    addNote,
    updateNote,
    deleteNote,
} = require("../controller/noteController");
const router = express.Router();

router.get("/notes", getAllNotes);
router.post("/notes/add", addNote);
router.put("/notes/update", updateNote);
router.delete("/notes/delete/:noteId", deleteNote);

module.exports = router;
