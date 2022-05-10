const fs = require("fs");
const path = require("path");
// validate function starts here
function validateNote(note) {
    if (!note.title|| typeof note.title !== 'string') {
      return false;
    }
    if (!note.text || typeof note.text !== 'string') {
      return false;
    }
    return true;
  }
// function to create new note
function createNewNote(body, notesArray) {
   const note = body;
   notesArray.push(note);
   fs.writeFileSync(
    path.join(__dirname, '../db/db.json'),
    JSON.stringify({ notes: notesArray }, null, 2)
  );
   return note;
  }
// function to delete note starts here
function deleteNote(id,notesArray){
  const result = notesArray.filter(note => note.id !== id);
  fs.writeFileSync(
      path.join(__dirname, '../db/db.json'),
      JSON.stringify({ notes: result }, null, 2)
    );
    return ("note is deleted")
}
module.exports = {
    validateNote,
    createNewNote,
    deleteNote
  };