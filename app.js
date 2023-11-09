var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var StudentRouter = require('./routes/Student');
var boardRouter = require('./routes/board')
var chooseRouter = require('./routes/choose')
var student = require('./models/student');
var resourceRouter = reqiure('./routes/resource')

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
app.use('/Student', StudentRouter);
app.use('/board',boardRouter);
app.use('/choose',chooseRouter);
app.use('/resource',resourceRouter);

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

module.exports = app;

require('dotenv').config();
const connectionString =
process.env.MONGO_CON
mongoose = require('mongoose');
mongoose.connect(connectionString);

//Get the default connection
var db = mongoose.connection;
//Bind connection to error event
db.on('error', console.error.bind(console, 'MongoDB connectionerror:'));
db.once("open", function(){
console.log("Connection to DB succeeded")});

// We can seed the collection if needed on
//server start
async function recreateDB(){
  // Delete everything
  await student.deleteMany();
  

  //creating Instance 1
  let instance1 = new student({s_NAME:"Srinadh",s_ID:1234,s_GRADE:98});
  instance1.save().then(doc=>{
  console.log("First object saved")}
  ).catch(err=>{
  console.error(err)
  });
  

  //creating instance 2
  let instance2 = new student({s_NAME:"Ram",s_ID:2345,s_GRADE:89});
  instance2.save().then(doc=>{
  console.log("Second object saved")}
  ).catch(err=>{
  console.error(err)
  });
  
  //creating instance 3
  let instance3 = new student({s_NAME:"Vinay",s_ID:3456,s_GRADE:75});
  instance3.save().then(doc=>{
  console.log("Third object saved")}
  ).catch(err=>{
  console.error(err)
  });
  
  
  }
  let reseed = true;
  if (reseed) {recreateDB();}

