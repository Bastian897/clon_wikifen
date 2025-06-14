const { Note, History } = require('../models');

exports.listNotes = async (_, res) => {
  const notes = await Note.findAll({ include: History });
  res.json(notes);
};

exports.createNote = async (req, res) => {
  const note = await Note.create(req.body);
  res.json(note);
};

exports.getNote = async (req, res) => {
  const note = await Note.findByPk(req.params.id, { include: History });
  note ? res.json(note) : res.status(404).end();
};

exports.updateNote = async (req, res) => {
  const note = await Note.findByPk(req.params.id);
  if (!note) return res.status(404).end();
  await History.create({ noteId: note.id, previous_content: note.content });
  await note.update(req.body);
  res.json(note);
};

exports.deleteNote = async (req, res) => {
  const note = await Note.findByPk(req.params.id);
  if (!note) return res.status(404).end();
  await note.destroy();
  res.status(204).end();
};
