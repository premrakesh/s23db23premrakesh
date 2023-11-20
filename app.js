var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var mountains = require("./models/mountains");

require('dotenv').config();
const connectionString =
process.env.MONGO_CON
mongoose = require('mongoose');
mongoose.connect(connectionString);

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var mountainsRouter = require('./routes/mountains');
var boardRouter = require('./routes/board');
var ChooseRouter = require('./routes/Choose');
var resourcerouter = require('./routes/resource');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/mountains', mountainsRouter);
app.use('/board', boardRouter);
app.use('/Choose', ChooseRouter);
app.use('/resource', resourcerouter);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

//Get the default connection
var db = mongoose.connection;
//Bind connection to error event
db.on('error', console.error.bind(console, 'MongoDB connectionerror:'));
db.once("open", function(){
console.log("Connection to DB succeeded")});

// We can seed the collection if needed on server start
async function recreateDB(){
  // Delete everything
  await mountains.deleteMany();
  let mountains1 = new mountains({name:"Mount Everest", location:'Nepal',altitude:12345});
  let mountains2 = new mountains({name:"Mount Everest", location:'Nepal',altitude:12345});
  let mountains3 = new mountains({name:"Mount Everest", location:'Nepal',altitude:12345});
  mountains1.save().then(doc=>{
  console.log("First object saved")}
  ).catch(err=>{
  console.error(err)
  });
  mountains2.save().then(doc=>{
    console.log("Second object saved")}
    ).catch(err=>{
    console.error(err)
    });
    mountains3.save().then(doc=>{
      console.log("Third object saved")}
      ).catch(err=>{
      console.error(err)
      });
 }
let reseed = true;
if (reseed) {recreateDB();}
module.exports = app;