const express = require('express');
const router = express.Router();

const { Evaluation, Professor } = require('../models');

// Obtener evaluaciones de un profesor
router.get('/:professorId', async (req, res) => {
  const evals = await Evaluation.findAll({
    where: { professorId: req.params.professorId }
  });
  res.json(evals);
});

// Crear evaluación
router.post('/:professorId', async (req, res) => {
  try {
    const evaluation = await Evaluation.create({
      professorId: req.params.professorId,
      rating: req.body.rating,
      comment: req.body.comment,
      authorId: req.body.userId || null
    });
    res.json(evaluation);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

module.exports = router;
