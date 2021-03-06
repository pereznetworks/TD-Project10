//require modules setup by express-generator
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');


// creating the express app
var app = express();

// require custom routers
var indexRouter = require('./routes/index');
var booksRouter = require('./routes/books');
var patronsRouter = require('./routes/patrons');
var loansRouter = require('./routes/loans');
var returnsRouter = require('./routes/returnsRouter');

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// telling express app which modules and settings to use
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// telling express app which routers to use
app.use(indexRouter);
app.use(booksRouter);
app.use(loansRouter);
app.use(patronsRouter);
app.use(returnsRouter);

// now which routes to use routers with
app.use('/', indexRouter);
app.use('/books', booksRouter);
app.use('/books/new', booksRouter);
app.use('/books/book_detail/id', booksRouter);
app.use('/loans', loansRouter);
app.use('/loans/new', loansRouter);
app.use('/return/return_book/id', returnsRouter);
app.use('/loans/book_detail/id', loansRouter);
app.use('/loans/patron_detail/id', loansRouter);
app.use('/book/book_detail/id', booksRouter);
app.use('/patrons', patronsRouter);
app.use('/patrons/new', patronsRouter);
app.use('/patrons/patron_detail/id', patronsRouter);
app.use('/return/return_book/id', returnsRouter);
app.use('/returns', returnsRouter);

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
