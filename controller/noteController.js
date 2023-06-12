const generator = require("../utils/generator");
const { store, getKeys, getValues } = require("../utils/memoryStorage");
const model = require("../model/note.model");

exports.getAllNotes = (req, res) => {
    let values = getValues(store);
    console.log(values);
    return res.status(201).send(values);
};

exports.addNote = (req, res) => {
    let seqId = generator.generate(),
        createdBy = "admin",
        createdDate = new Date();

    //req.body
    let title = req.body.title,
        content = req.body.content;
    if (!title || !content) {
        return res.status(500).send({
            error: "Title and Content should not be empty",
        });
    }

    let Note = model.Note;
    let noteObj = new Note(seqId, title, createdBy, content, createdDate);
    store.setItem(seqId, noteObj);

    return res.status(201).send("Successfully Created Note");
};

exports.updateNote = (req, res) => {
    let noteId = req.body.noteId,
        createdBy = "Marwan",
        createdDate = new Date();

    //req.body
    let title = req.body.title,
        content = req.body.content;
    if (!title || !content) {
        return res.status(500).send({
            error: "Title and Content should not be empty",
        });
    }

    let Note = model.Note;
    let noteObj = new Note(noteId, title, createdBy, content, createdDate);
    console.log(noteId);
    store.setItem(noteId, noteObj);
    res.status(201).send("Successfully Updated Note");
};

exports.deleteNote = (req, res) => {
    res.send("Delete Note");
};
