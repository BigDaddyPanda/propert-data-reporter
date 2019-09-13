const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const passport = require('passport');
const config = require('./db');
const cors = require('cors')
const userRoutes = require('./routes/user');

const httpLogger = require('./middlewares/httpLogger');
const logger = require('./middlewares/logger');

mongoose.connect(config.DB, { useNewUrlParser: true }).then(
    () => { logger.info('Database is connected') },
    err => { logger.error('Can not connect to the database' + err) }
);

const app = express();
app.use(cors());
app.use(httpLogger);
app.use(express.static(__dirname + '/public'));
app.use(passport.initialize());
require('./passport')(passport);

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/api/users', userRoutes);

app.get('/', function (req, res) {
    res.send('hello');
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    logger.info(`Server is running on PORT ${PORT}: check http://localhost:${PORT}`);
});