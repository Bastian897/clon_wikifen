const express = require('express');
const router = express.Router();
const controller = require('../controllers/evaluationController');

router.get('/teacher/:teacherId', controller.listEvaluations);
router.post('/teacher/:teacherId', controller.createEvaluation);

module.exports = router;
