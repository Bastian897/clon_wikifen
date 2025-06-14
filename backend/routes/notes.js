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

// Actualizar nota
router.put('/:id', async (req, res) => {
  try {
    const original = await Note.findByPk(req.params.id);
    await Note.update(req.body, { where: { id: req.params.id } });
    const updated = await Note.findByPk(req.params.id);
    await Revision.create({
      tableName: 'notes',
      rowId: req.params.id,
      diff: { before: original, after: updated },
      userId: req.body.userId || null
    });
    res.json(updated);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Eliminar nota
router.delete('/:id', async (req, res) => {
  const original = await Note.findByPk(req.params.id);
  await Note.destroy({ where: { id: req.params.id } });
  await Revision.create({
    tableName: 'notes',
    rowId: req.params.id,
    diff: { before: original, after: null },
    userId: req.body.userId || null
  });
  res.json({ message: 'deleted' });
});


module.exports = router;
