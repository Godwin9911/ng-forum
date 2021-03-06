/* eslint-disable no-console */
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const passport = require('passport');
const session = require('express-session');
const flash = require('connect-flash');

const app = express();
const port = process.env.PORT || 5000;
const User = require('./models/userModel');
const userRouter = require('./routes/userRouter')(User);
const Question = require('./models/questionModel');
const questionRouter = require('./routes/questionRouter')(Question);

// passport Config
require('./config/passport')(passport);

mongoose.connect('mongodb://localhost/ngforum', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB Connected..'))
  .catch((err) => console.log(err));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Express Session
app.use(session({
  secret: 'keyboard cat',
  resave: true,
  saveUninitialized: true
}));

// passport Middleware
app.use(passport.initialize());
app.use(passport.session());

app.use(flash());

app.use('/api/user', userRouter);
app.use('/api/question', questionRouter);

app.get('/', (req, res) => {
  res.send('Welcome to my API');
});

app.listen(port, () => {
  console.log(`Running on port  ${port}`);
});
