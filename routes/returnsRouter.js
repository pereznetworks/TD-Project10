// importing express and setting up a router
var express = require('express');
var router = express.Router();
var Sequelize = require('../models').sequelize;

var db = require('../data/models/index.js'); /* importing sequelize db */
var locals = require("../views/locals"); /* importing static vars */
var utils = require('../utils/index.js') /* importing my own helper utils */

/* GET return book/loan form page */
router.get('/return/return_book/:id', function(req, res, next) {

  // parsing to int because the id field in the table is an INTEGER
    var idInt = parseInt(req.params.id);

    db.Loans.findOne({
         where: { id: req.params.id },
         include: [{
           model: db.Books,
           where: { id: Sequelize.col('Loans.book_id')},
         }]
    }).then((loan) => {
      return db.Patrons.findById(loan.patron_id).then(patron => {
        loan.Patron = patron;
        return loan;
       });
    }).then((loan) => {

        /* break down book array of objects..
           to just what is needed to return the book..
         */
        res.locals.loanId = loan.dataValues.id;
        res.locals.bookTitle = loan.Book.dataValues.title;
        res.locals.patronName = `${loan.Patron.first_name} ${loan.Patron.last_name}`;
        res.locals.loaned_on = loan.dataValues.loaned_on;
        res.locals.return_by = loan.dataValues.return_by;

        /* get returned_on date, formatted date yyyy-mm-dd */
        res.locals.returnedOn = utils.getADate();

        // finally... with all this data, render the return book form
        res.render('returnBookViews', {loan: {}, newFormTitle: 'New Loan'});
      })
    .catch((error) => {
      // set locals, only providing error in development
      res.locals.message = error.message;
      res.locals.error = req.app.get('env') === 'development' ? error : {};

      // render the error page
      res.status(error.status || 500);
      res.render('error');
    }); // end findOne.loan for book form

  });  // end router.get /return/return_book form

  /* POST return book, i.e... update loan with returned_on date*/
  router.post('/returns', function(req, res, next) {
    db.Loans.findOne({
        where: {id: req.body.loanId}
      }).then(function(loan) {
          return loan.update(req.body);
        }).then(function(){
          res.redirect(`/loans`);
        }).catch(function(error){
           if(error.name === "SequelizeValidationError") {

             db.Loans.findOne({
                  where: { id: req.body.loanId},
                  include: [{
                    model: db.Books,
                    where: { id: Sequelize.col('Loans.book_id')},
                  }]
             }).then((loan) => {
               return db.Patrons.findById(loan.patron_id).then(patron => {
                 loan.Patron = patron;
                 return loan;
                });
             }).then((loan) => {

                 /* break down book array of objects..
                    to just what is needed to return the book..
                  */
                 res.locals.loanId = loan.dataValues.id;
                 res.locals.bookTitle = loan.Book.dataValues.title;
                 res.locals.patronName = `${loan.Patron.first_name} ${loan.Patron.last_name}`;
                 res.locals.loaned_on = loan.dataValues.loaned_on;
                 res.locals.return_by = loan.dataValues.return_by;

                 /* get returned_on date, formatted date yyyy-mm-dd */
                 res.locals.returnedOn = utils.getADate();

                 // finally... with all this data, render the return book form, along with the errors
                 res.render('returnBookViews', {loan: req.body, errors: error.errors, newFormTitle: 'New Loan'});
               })
             .catch((error) => {
               // set locals, only providing error in development
               res.locals.message = error.message;
               res.locals.error = req.app.get('env') === 'development' ? error : {};

               // render the error page
               res.status(error.status || 500);
               res.render('error');
             }); // end RE-render return book form

           } else {
             throw error;
           }
        }).catch(function(error){
          // set locals, only providing error in development
          res.locals.message = error.message;
          res.locals.error = req.app.get('env') === 'development' ? error : {};

          // render the error page
          res.status(error.status || 500);
          res.render('error');
        });

        // res.locals.error = createError(500);
        // res.locals.message = "Oops, this page is under construction";
        // res.status(500);
        // res.render('error');

  });

module.exports = router;
