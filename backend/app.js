const express = require('express');
const bodyParser = require('body-parser');

const models = require('./models');
const authRoutes = require('./routes/auth');
const professorRoutes = require('./routes/professors');
const evaluationRoutes = require('./routes/evaluations');
const noteRoutes = require('./routes/notes');
const subjectRoutes = require('./routes/subjects');
const revisionRoutes = require('./routes/revisions');

const app = express();
app.use(bodyParser.json());

app.use('/api/auth', authRoutes);

app.use('/api/notes', noteRoutes);
app.use('/api/subjects', subjectRoutes);
app.use('/api/revisions', revisionRoutes);
app.use('/api/professors', professorRoutes);
app.use('/api/evaluations', evaluationRoutes);
app.use('/api/notes', noteRoutes);

const PORT = process.env.PORT || 3000;
models.sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
});
