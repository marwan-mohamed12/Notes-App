const generator = require("../utils/generator");
const { store, getKeys, getValues } = require("../utils/memoryStorage");
const model = require("../model/note.model");
exports.getAllNotes = (req, res) => {
    let seqId = generator.generate();
    store.setItem(seqId, "1st");
    let seqId2 = generator.generate();
    store.setItem(seqId2, "2st");
    const Note = model.Note;
    const note1 = new Note(
        seqId,
        "bla",
        "ssssssssss",
        "ttttttttttt",
        new Date()
    );
    res.send(
        `Keys: ${JSON.stringify(getKeys(store))} Values: ${JSON.stringify(
            getValues(store)
        )}
        note: ${JSON.stringify(note1)}
        `
    );
    // res.send("Get All Notes");
};

exports.addNote = (req, res) => {
    res.send("Add Note");
};

exports.updateNote = (req, res) => {
    res.send("Update Note");
};

exports.deleteNote = (req, res) => {
    res.send("Delete Note");
};
