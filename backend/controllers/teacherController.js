const { Teacher, Evaluation } = require('../models');

exports.listTeachers = async (_, res) => {
  const teachers = await Teacher.findAll({ include: Evaluation });
  res.json(teachers);
};

exports.createTeacher = async (req, res) => {
  const teacher = await Teacher.create(req.body);
  res.json(teacher);
};

exports.getTeacher = async (req, res) => {
  const teacher = await Teacher.findByPk(req.params.id, { include: Evaluation });
  teacher ? res.json(teacher) : res.status(404).end();
};

exports.updateTeacher = async (req, res) => {
  const teacher = await Teacher.findByPk(req.params.id);
  if (!teacher) return res.status(404).end();
  await teacher.update(req.body);
  res.json(teacher);
};

exports.deleteTeacher = async (req, res) => {
  const teacher = await Teacher.findByPk(req.params.id);
  if (!teacher) return res.status(404).end();
  await teacher.destroy();
  res.status(204).end();
};
