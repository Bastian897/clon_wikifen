const express = require('express');
const bodyParser = require('body-parser');
const { sequelize } = require('./models');

const authRoutes = require('./routes/auth');
const teacherRoutes = require('./routes/teachers');
const noteRoutes = require('./routes/notes');
const evaluationRoutes = require('./routes/evaluations');

const app = express();
app.use(bodyParser.json());

app.use('/api/auth', authRoutes);
app.use('/api/teachers', teacherRoutes);
app.use('/api/notes', noteRoutes);
app.use('/api/evaluations', evaluationRoutes);

const PORT = process.env.PORT || 3000;
sequelize.sync().then(() => {
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
});
