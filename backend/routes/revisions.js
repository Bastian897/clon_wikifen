const express = require('express');
const router = express.Router();
const { Revision, Professor, Note } = require('../models');

// Obtener revisiones de una fila
router.get('/:table/:rowId', async (req, res) => {
  const revs = await Revision.findAll({
    where: { tableName: req.params.table, rowId: req.params.rowId },
    order: [['createdAt', 'DESC']]
  });
  res.json(revs);
});

// Rollback simple para profesor y nota
router.post('/:table/:rowId/rollback/:revId', async (req, res) => {
  const rev = await Revision.findByPk(req.params.revId);
  if (!rev) return res.status(404).json({ error: 'revision not found' });
  const data = rev.diff.before;
  try {
    if (req.params.table === 'professors') {
      await Professor.update(data, { where: { id: req.params.rowId } });
    } else if (req.params.table === 'notes') {
      await Note.update(data, { where: { id: req.params.rowId } });
    } else {
      return res.status(400).json({ error: 'unsupported table' });
    }
    res.json({ message: 'rolled back' });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

module.exports = router;
