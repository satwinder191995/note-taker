'use strict'
const router = require('express').Router();
const { v4: uuidv4 } = require('uuid');
var path = require('path');
const {notes} = require('../../db/db.json');
const fs = require('fs');
const { validateNote,createNewNote,deleteNote} = require('../../lib/notes');
// Get api request starts here
router.get('/notes', (req, res) => {
  const rawdata = fs.readFileSync(
    path.join(__dirname, '../../db/db.json')
  );
    let data = JSON.parse(rawdata);
    res.json(data.notes);
  });
// post request starts here
router.post('/notes', (req, res) => {
    // let results = notes;
    const rawdata = fs.readFileSync(
      path.join(__dirname, '../../db/db.json')
    );
    let results = JSON.parse(rawdata);
    // req.body.id = results.notes.length.toString();
    req.body.id = uuidv4();
    if (!validateNote(req.body)) {
        res.status(400).send('The entered value are empty please enter something');
      } else {
        const note = createNewNote(req.body,results.notes );
        res.json(note);
      }
   
  });
  // delete request starts here
router.delete('/notes/:id', (req, res) => {
    // let notesArray = notes;
    const rawdata = fs.readFileSync(
      path.join(__dirname, '../../db/db.json') 
    );
    let notesArray = JSON.parse(rawdata);
    console.log(notesArray)
    const id = req.params.id;
    deleteNote(id,notesArray.notes);
    res.json("notes has been deleted");
   
  });

  module.exports  = router;
