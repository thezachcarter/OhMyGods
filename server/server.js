const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();

const sessionMiddleware = require('./modules/session-middleware');
const passport = require('./strategies/user.strategy');

// Route includes
const userRouter = require('./routes/user.router');
const usersGodsRouter = require('./routes/usersGods.router');
const usersMonstersRouter = require('./routes/usersMonsters.router');
const adminGodsRouter = require('./routes/adminGods.router');
const adminMonstersRouter = require('./routes/adminMonsters.router');
const infoRouter = require('./routes/info.router');


// Body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Passport Session Configuration //
app.use(sessionMiddleware);

// start up passport sessions
app.use(passport.initialize());
app.use(passport.session());

/* Routes */
app.use('/api/user', userRouter);
app.use('/api/usersGods', usersGodsRouter);
app.use('/api/usersMonsters', usersMonstersRouter);
app.use('/api/adminGods', adminGodsRouter);
app.use('/api/adminMonsters', adminMonstersRouter);
app.use('/api/info', infoRouter);

// Serve static files
app.use(express.static('build'));

// App Set //
const PORT = process.env.PORT || 5000;

/** Listen * */
app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
