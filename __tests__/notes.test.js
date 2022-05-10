const { validateNote,createNewNote,deleteNote} = require('../lib/notes');
const { notes } = require('../db/db.json');

test("validation", () => {
    const note  = { title: "Satwinder",text:"This is aa express app", id: "1" };
    const data = validateNote(note);
    expect(data).toBe(true);
    
  });

test("creates a new note", () => {
    const results = notes;
    const note  = { title: "Satwinder",text:"This is aa express app", id: "1" };
    const newData = createNewNote(note,results);
  
    expect(newData.title).toBe("Satwinder");
    expect(newData.text).toBe("This is aa express app");
  });
  
  test("delete a note", () => {
    const results = notes;
    const id = 1;
    const data = deleteNote(id,results);
  
    expect(data).toBe("note is deleted");
  });
  