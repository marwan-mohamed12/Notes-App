exports.Note = class Note {
    constructor(noteId, title, createdBy, content, createdDate) {
        this.noteId = noteId;
        this.title = title;
        this.content = content;
        this.createdBy = createdBy;
        this.createdDate = createdDate;
    }
};
