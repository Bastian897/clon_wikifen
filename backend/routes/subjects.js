const express = require('express');
const router = express.Router();
const { Subject } = require('../models');

// Obtener todas las asignaturas
router.get('/', async (req, res) => {
  const subjects = await Subject.findAll();
  res.json(subjects);
});

// Crear asignatura
router.post('/', async (req, res) => {
  try {
    const subject = await Subject.create(req.body);
    res.json(subject);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Actualizar asignatura
router.put('/:id', async (req, res) => {
  try {
    await Subject.update(req.body, { where: { id: req.params.id } });
    const updated = await Subject.findByPk(req.params.id);
    res.json(updated);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Eliminar asignatura
router.delete('/:id', async (req, res) => {
  await Subject.destroy({ where: { id: req.params.id } });
  res.json({ message: 'deleted' });
});

module.exports = router;
