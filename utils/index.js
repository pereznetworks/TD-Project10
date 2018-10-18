'use strict';

const addLeadingZero = function(num){

   // for use with date strings
   // tercery statement from stackoverflow
   // add leading zero if num less then 10
   // only add leading zero if day is > 10
   // return statement converts interger to a string

   if ( num < 10 ){
     return (num < 10) ? ("0" + num) : num;
   } else {
     return num.toString();
   }

};

const getADate = function(returninSoManyDays){

   // get current date: format, 2018/10/01
   // or get future date, that is <num> days from now

   if (!returninSoManyDays) {
     var d = new Date();
     var day = d.getDate();
     day = addLeadingZero(day);
     var month = d.getMonth() + 1;
     month = addLeadingZero(month);
     var year = d.getFullYear().toString();
     return `${year}-${month}-${day}`;

    } else {

     var rd = new Date();
     rd.setDate(rd.getDate() + returninSoManyDays);
     var plus7Days = rd.getDate()
     var returnDay = addLeadingZero(plus7Days);
     var month = rd.getMonth() + 1;
     var returnMonth = addLeadingZero(month);
     var returnYear = rd.getFullYear().toString();
     return `${returnYear}-${returnMonth}-${returnDay}`;
   }

};

/* method used to validate input fields for model attributes */

const checkIfNumbersOnly = function(inputField){

   const hasOnlyNums = /^[0-9]+$/;
   if (inputField.match(hasOnlyNums)) {
      throw new Error(`Oops, this ${inputField} has only numbers`);
   }

};

const checkifCappedWords = function(inputField){

   const firstLetterOfWordNotCaped = /\b([a-z])/g
   if (inputField.match(wordsNotCapped)){
      throw new Error(`Oops, Please capitilze first letter of each word.`);
   }

};

const checkAddressLength = function(inputField){

   if (inputField.match(/\s+/g).length < 3){
     throw new Error(`Oops, This doesn't seem to be full address.`);
   }

};

const checkZipCodeLength = function(inputField){

   if (inputField.match(/^(\d){5}$/g).length < 3){
     throw new Error(`Oops, ${inputField} are 5 digits long`);
   }

};

module.exports.addLeadingZero = addLeadingZero;
module.exports.getADate = getADate;
module.exports.checkIfNumbersOnly = checkIfNumbersOnly;
module.exports.checkifCappedWords = checkifCappedWords;
module.exports.checkAddressLength = checkAddressLength;
module.exports.checkZipCodeLength = checkZipCodeLength;
