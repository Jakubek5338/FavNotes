const express = require('express');
const router = express.Router();
const NoteController = require('../controllers/noteControllers');

router.get('/', NoteController.getAllNotes);
router.get('/:id', NoteController.getNote);
router.post('/', NoteController.saveNote);
router.put('/', NoteController.updateNote);
router.delete('/:id', NoteController.deleteNote);

module.exports = router;