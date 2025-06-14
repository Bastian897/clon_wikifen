const { Evaluation } = require('../models');

exports.listEvaluations = async (req, res) => {
  const evals = await Evaluation.findAll({ where: { TeacherId: req.params.teacherId } });
  res.json(evals);
};

exports.createEvaluation = async (req, res) => {
  const evaluation = await Evaluation.create({
    TeacherId: req.params.teacherId,
    rating: req.body.rating,
    comment: req.body.comment,
  });
  res.json(evaluation);
};
