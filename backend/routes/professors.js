const express = require('express');
const router = express.Router();

const { Professor, Subject } = require('../models');

// Obtener todos los profesores
router.get('/', async (req, res) => {
  const professors = await Professor.findAll({ include: Subject });
  res.json(professors);
});

// Crear profesor
router.post('/', async (req, res) => {
  try {
    const professor = await Professor.create(req.body);
    res.json(professor);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Actualizar profesor
router.put('/:id', async (req, res) => {
  try {

    const original = await Professor.findByPk(req.params.id);
    await Professor.update(req.body, { where: { id: req.params.id } });
    const updated = await Professor.findByPk(req.params.id);
    await Revision.create({
      tableName: 'professors',
      rowId: req.params.id,
      diff: { before: original, after: updated },
      userId: req.body.userId || null
    });
    res.json(updated);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Eliminar profesor
router.delete('/:id', async (req, res) => {
  const original = await Professor.findByPk(req.params.id);
  await Professor.destroy({ where: { id: req.params.id } });
  await Revision.create({
    tableName: 'professors',
    rowId: req.params.id,
    diff: { before: original, after: null },
    userId: req.body.userId || null
  });

  res.json({ message: 'deleted' });
});

module.exports = router;
