import express from 'express';
import path from 'path';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';
import session from 'express-session';
import passport from 'passport';
import logger from 'morgan';
import dotEnv from 'dotenv';
import db from './db';




dotEnv.config();

const d = db();

import routes from './routes/index';

var app = express();



app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());
app.use(session({
  secret: process.env.SECRETID,
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false, maxAge: 60000 }
}));

app.use(passport.initialize());
app.use(passport.session());
require('./middlewares/auth');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, 'public')));


routes(app);
export default app;
