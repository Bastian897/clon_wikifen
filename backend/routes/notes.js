const express = require('express');
const router = express.Router();

const { Note, Subject } = require('../models');

// Obtener notas por asignatura
router.get('/subject/:subjectId', async (req, res) => {
  const notes = await Note.findAll({
    where: { subjectId: req.params.subjectId }
  });
  res.json(notes);
});

// Crear nota
router.post('/subject/:subjectId', async (req, res) => {
  try {
    const note = await Note.create({
      subjectId: req.params.subjectId,
      title: req.body.title,
      content: req.body.content,
      authorId: req.body.userId || null
    });
    res.json(note);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

module.exports = router;
