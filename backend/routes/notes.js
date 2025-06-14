const express = require('express');
const router = express.Router();
const controller = require('../controllers/noteController');

router.get('/', controller.listNotes);
router.post('/', controller.createNote);
router.get('/:id', controller.getNote);
router.put('/:id', controller.updateNote);
router.delete('/:id', controller.deleteNote);

module.exports = router;
