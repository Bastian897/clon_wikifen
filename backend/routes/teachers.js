const express = require('express');
const router = express.Router();
const controller = require('../controllers/teacherController');

router.get('/', controller.listTeachers);
router.post('/', controller.createTeacher);
router.get('/:id', controller.getTeacher);
router.put('/:id', controller.updateTeacher);
router.delete('/:id', controller.deleteTeacher);

module.exports = router;
