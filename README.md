# TD-Project10: Build a Library Manager


## Contents:
  - [Project Status](#project-status)
  - [For Project Reviewer](#for-the-project-reviewer)
  - [For Developers](#for-developers)
  - [Project Updates](#project-updates)
    - [Project Update 22](#project-update-22)
    - [Project Update 21](#project-update-21)
    - [Project Update 20](#project-update-20)
    - [Project Update 19](#project-update-19)
    - [Project Update 18](#project-update-18)
    - [Project Update 17](#project-update-17)
    - [Project Update 16](#project-update-16)
    - [Project Update 15](#project-update-15)
    - [Project Update 14](#project-update-14)
    - [Project Update 13](#project-update-13)
    - [Project Update 12](#project-update-12)
    - [Project Update 11](#project-update-11)
    - [Project Update 10](#project-update-10)  
    - [Project Update 9](#project-update-9)
    - [Project Update 8](#project-update-8)
    - [Project Update 7](#project-update-7)
    - [Project Update 6](#project-update-6)
    - [Project Update 5](#project-update-5)
    - [Project Update 4](#project-update-4)
    - [Project Update 3](#project-update-3)
    - [Project Update 2](#project-update-2)
    - [Project Update 1](#project-update-1)
  - [For the original project files and project instruction](https://github.com/pereznetworks/TD-Project10/tree/master/z-project-files-library-manager-v1)
  - [Developer Notes](#developer-notes)
  - [Hard DB Reset](#hard-db-reset)

## Project Status

  DOING:

        final walk-through for project

  NEXT:

        a remove Book and a remove Patron feature may be added in a future releases

        an internal delete function may be added in a future release
         for removing a record from specific table may be added to

  TODO:

        submit project

  DONE:

    Project Extra Credit Features:

       Pagination for Books, Loans and Patrons page

       Search for Books and Patrons

    Project Expectations:

        Models
          Books, Loans and Patrons
          Model Associations

        Home Screen
          All links load appropriate route and viewe

        Navigation
          Nav bar available from every part of app

        Books Page
          The following pages work as required
            Book Listings Page
            Add a New Book
            Book Details Page

        Loans Page
          The following pages work as required
            Loan Listings Page
            New Loan Page

        Return Book Page
          Is launched using the 'Return Book' button,
            from Patron detail, Loan detail and Book detail

        Patron Listing Page
          The following pages work as required
            Patron Detail Page
            New Patron Page

        Validaton and Messages for Required Fields and Forms
          work as required

  [back to Content Menu](#contents)

## For the Project Reviewer

      Basics steps:

        to run this version of Team TreeHouse, Library Manager...

          download or clone of project from my Github rep

          npm install

          npm start

          open localhost:3000 in an internet browser

  [back to Content Menu](#contents)

## For Developers

      Basics steps:

      to run this version of Team TreeHouse, Library Manager...

          download or clone of project from my Github rep

          npm install

          npm start

          open localhost:3000 in an internet browser

      when testing, recommend using Chrome browser

          npm start is set to run the app with the --inspect flag

              "node --inspect ./bin/www"

              can use node.js chrome browser developer tools

       then make your own changes to the code

       then when ready run 'npm start'

          but,

          read the following first

  - [For the original project files and a project instruction](https://github.com/pereznetworks/TD-Project10/tree/master/z-project-files-library-manager-v1)
  - [Developer Notes](#developer-notes)
  - [Hard DB Reset](#hard-db-reset)

          the following folders and files comprise the Library Manager app

          - I ended up not using migrations in my project
            but the sequelize config is setup to track migrations
          - I did use seeders to insert sample data into my library db

            /bin
            /config
            /migrations
            /models
            /public
            /routes
            /seeders
            /views
            /utils
            seedData.json
            app.js

            library.db - can't be modified or viewed directly

            package.json - npm package management

    [back to Content Menu](#contents)

## Project Updates:

  Project Updates list from most recent update to oldest

  [back to Content Menu](#contents)

## Project Update 24:

  Extra Credit Feature: Search - for Books and Patrons

    Search input form integrated into layout template

      Books search route working, using same view as books all/overdue/checkout

      Patrons search route working, using same vieww as patrons main page

      Search is not case-sensitive,

      good for partial matches on patrons and books main table

      no Loans search for now

      added a search title so it's clear when viewing search results

## Project Update 23:

  Extra Credit Feature: Pagination - for Books, Patrons and Loans

    Using jquery and front-end css/javascript to due actual pagination links

    On server-side:

    wrote and added a paginate method to my utils library

    made changes to book, loan and patron table template to....

      implement pagination in the way the table on each page is displayed

      array of book, loans or patron data is processed into a pagesArray

        only if more than 10 rows will appear in a table

      otherwise normal process for 'tabling' of book, loans or patron data

    Nav bar for pagination links in footer of each main page,

      displays at bottom of page at all times

      is blank, no pagination links, if no pagination needed

      footer pagination nav bar runs full length section

    also fixed overdue and checked out books and loans

      using the same rules for both

       so both now display correct data

## Project Update 22:

  all forms and validation working

    no client side validation used
    all data is server side model-based validation

    forms submit data
    all fields validated
    records created in table correctly
    can update records

    in new loan form
        books and patrons menu work properly
        default option is the "please choose an option" field
          default options submits a null string
        date are auto-populated
          date input fields are actually hidden
          dates displayed in span elements that look like input fields

    in return book/loan form
        return date are auto-populated
          date input field is hidden
          date displayed in span elements that look like input fields

    new patron and update patron
        address and email get additional validation
          in addition to notEmpty, format checking also
        libraryId gets same treatment as date field
          autopopulated, hidden input, displaying span tag
        zip code get is isNumberic validation

    book patron
        this works also
        all fields get notEmpty validation
        year published get isNumberic validation

    cannot set a derived-attribute when a record is being created

      the real attribute it's based on does'nt exist yet
       so cannot set library_id, using a setter based on id of the new record
          cause there is no id yet.... !?@#$%

      also there does not seem to a method for ...
        custom alphanumeric auto-incremented primary key

      did some input field custom styling



## Project Update 21:

  Create and Update for Patron, Books and Loans DONE

    can create new patron, new loan and new book

    can update patron and book and loan, which is return book

    return book action button now reusable

## Project Update 20:

  first create op complete !

  can create a new loan and add to loans table
    then can access that loan via book, patron and loan details
    verified dataValues, book_id, patron_id
      and pre-calc'ed dates saved correctly

  when creating a new loan and adding to the loan table...
   sequelize initializes the returned_on field as null when empty,
    changed seed data to match this
     and changed all evaluations of returned_on field
       test for == null instead of length == 0

## Project Update 19:

   MILESTONE #1

   DONE with all Routes and Views that need Read in db C.R.U.D. ops

   All Views in place and working

   ... just need to implement the Create, Update and Delete methods

## Project Update 18:

  Drop down menus in 'New Loan' form now driven by ...

    Promise.all([db.Patrons.findAll(), db.Books.findAll()])...

  Which brings up some crazy options for handling other queries...

    may go back and refactor the book/patron detail views and loans table lookups

## Project Update 17:

  Overdue and Checked Out filter working for both Loans and Books

    testing if Date.now() > new Date(return_by) and returned_on.length == 0

    available from Home pg as well

## Project Update 16:

  Handling case where a book or a patron has no loan history

    required: false set on included model

    no need for this in loan page
      since loan table only displays row from loan table
      plus even href links to book and patron
       will be for those that have a loan history

## Project Update 15:

  Overdue and Checked Out Books filters working

## Project Update 14:

  all loans table view working:

  used a patrons.FindAll, include loans, include Books

  which yields an array, each item is a book, it's loan detail and patron  

  then used a filter array iteration to return only books item.Loan != null

## Project Update 13:

  correct when Return Book action button appears
    if returned_on.length != 0

## Project Update 12:

  had do a HARD DB reset, ..see [Developer Notes](#developer-notes)
    but did get Date Formatting of seed data in loans table fixed
    use DATATYPES. or Sequelize.DATEONLY for yyyy-mm-dd dates ie... 2018-10-11

## Project Update 11:

  FINALLY!!!

  book and patron table associations (joins) now working

  see [Project Status](#project-status) for details

  patron and book detail views complete


## Project Update 10:

  Can now load all views and forms with data from library.db tables

  now to implement associations - to replace \_id's with values referenced
    like book_id = 'Book Title'

  also to handle querying for data across multiple tables

  simpler pug templated means having more of these but way easier to maintain

## Project Update 9:

  Seeders now work.
    express app, using sequelize's bootstrapped views/index.js
      creates a new emopty library.db with tables using models
    then exit the app
    run sequelize db:seed
      and with the right syntax in seeder js files
        was able to seed sample data into database

  Verified that am able to do R in CRUD
    able to do findAll, findOne on Books and Loans table

  Now to handle a few issues

    need valid dates in a book's loan details

    how to make sure ...
      to not try to get loan detail of book that has none
      or give msg to that affect ...
      and give choice to create a loan for that book

    create a table view using mutli-table query for...
    the different filter and options and detail table views

  Finally, !!!
    Now can start building method for CRUD operations

## Project Update 8:

After much TROUBLEshooting....
  Not Using sample library.db the came with project files
    seems to work only with Sequelize v3
  Since I am using Sequelize v4 in this project...

Solution is simple:
    Express app starts, runs Sequelize bootstrapped code
      which uses config file and creates a new library.db in none exists
      then am able to do CRUD and display from tables in library.db

Re-factor of all pug templates
Overall UI flow the same
  Result is...
    separate folder for each section:
      folder of templates for
        bookViews, loanViews and patronViews
        in addition to returnBookViews
      more but simpler, static templates
      little or no calculation and/or javascript code
  re-factor allows...
      to more easily work with Sequelize's SQlite data,
      provides better performance,
      code is easier to understand and is more maintainable.

## Project Update 7:

  over-all library manager UI flow:

  from books page
    clicking on the book title
      send book id in url
    book detail will use param.id
      to show book's update form and loan history of that book

    will be able to
      filter show all books table by overdue and checked out books

  from patrons page
    clicking on the patron name
      send patron id in url
    patron detail will use param.id
     to show patron's update form and loan history of that patron

  from loans page
    can access both book and patron detail

    will be able to
      filter show all books table by overdue and checked out books

  at end of each row in books/patrons/loans table
    and book/patron detail
    and filtered table     

    action column will have "return book"
      if the returned-on column has no entry

   'return book' action button loads the return book form page
      will need to return to page loaded from

## Project Update 6:

  Home, Books, Patrons and Loans pages rendering complete  

  verified variables in views/local.js needed to render each main page

  verified modular pug template, table.pug works for ...
    to show all books. loans and patrons

  adding code comments
## Project Update 5:

  Basic routing for Home, Books, Patrons and Loans page
    added views/locals.js
      exporting object for each main page
        to keep router code DRY, modular and simple

## Project Update 4:

  created Sequelize models for Book, Patrons and Loans
  added require to routes

## Project Update 3:

  Environment Setup

  - Step 1: Express generator:

    - npm install install express express-generator

    - node_modules/.bin/express . -f

  - Step 2: Sequelize setup:

    - npm sequelize sqlite3 sequelize-cli

  - Step 3: Replaced deprecated packages:

    - removed transformers@2.1.0, installed

      - npm install --save jstransformer

    - upgraded constantinople@3.0.2 to

      - npm install --save constantinople@3.1.1

    - removed jade@1.11.0, installed

      - npm install --save pug

    - initialzed sequelize

      - node_modules/.bin/sequelize init

    - added sequelie require sequelize sync to .bin/www

  [back to Content Menu](#contents)

## Project Update 2:

  Note: need to keep in mind differences between [Sequelize v3 to v4](http://docs.sequelizejs.com/manual/tutorial/upgrade-to-v4.html)

  will need refer to my Sequelize workshop Blog example v3 and v4 for syntax and implementation differences

  making these a GitHub repo for easier reference and safe keeping

  [back to Content Menu](#contents)

## Project Update 1:

  Before You Start:

  I did indeed downloaded the project files

[For the original project files and instructions ](https://github.com/pereznetworks/TD-Project10/tree/master/project-file-library-manager-v1)

  Read, studied and created my own markdown-style version of the project instructions

  Created this markdown-style   project readme to track and document my progress through this project.

  Will eventually be a how-to for developers and other students...
  who want to clone, download and work on their version of this project.

  [back to Content Menu](#contents)

## Developer Notes:

    Lots pages and subpages in the html-mockup:

        lots of components and sub-components
        Will need to make sure I don't make the routing over-complicated
        UI and UI-controls will need change based on context of data presented

    This is an Express.js app:

        Sequelize for data,
        Pug for html rendering,
        with Express for roputing http req/res
        and a whole bunch of npm modules

    Sequelize v4 is different from the v3 demo'ed in the Sequelize/Node.js workshop:

        I completed the Sequelize/Node.js workshop using both v3 and v4
        I will use these as model to make sure Sequelize v4 syntax and methods used in this app

    Date Formatting:

        use DATATYPES. or Sequelize.DATEONLY for yyyy-mm-dd dates ie... 2018-10-11


    Not Using sample library.db that came with project files, seems to work only with seqeulize v3:

        Solution is simple: Express app runs sequelize bootstrapped code
        which uses config file and creates a new libary.db in none exists
        along with seeders... can then refresh library.db when I need to
        see HARD DB RESET below

    For whatever reason, after adding ANY-KIND of model associations...

        I could NOT get the seeders past this one error:

        ERROR: SQLITE_CONSTRAINT: FOREIGN KEY constraint failed

          to get around this I did a Hard DB Reset

[Hard DB Reset](#hard-db-reset).

          basically,

            rm -rf library.db (after making a backup)

            remove model associations from code

            get your seeders ready

            start the app, which creates a blank library.db

            run seeders, after seed data is inserted,

            add associations back in to code

            restart app and everything is ok....

## HARD DB RESET:

      I used this to work through fundamental problems and bugs in sequelize code

        nice to try, for example ...

        if odd behavior occurs if/when making changes to your model associations

      1: delete library.db, (after making a backup)
          ( in my app, model/index.js creates it if there is none )
      2: remove model associations
          (in my app, all in one place, models/index.js)
      3: remove seeders history from seedData.json,
          leaving just the []
      4: RUN sequelize seed:generate -name <name of model>
          FOR EACH MODEL/TABLE your db will need
      5: add your code and data for each model/table
          to a separate seed file for each model
          mine were in the /seeders folder
      6: restart the server app
          ( for my app, npm start), this create a new blank db if theres is none
      7: stop the server
      8: run the seeders
          sequelize db:seed:all
      9: add the desired model associations back into your code
          mine are in one place, models/index.js
      10: restart the server app
      11: when your db starts up, it will check the model associations...
      12: if no errors, your good to go, otherwise back to drawing board
      13: with good associations...
          now can access a page that runs code that runs a query that uses the models
          and see if the associations work as expected with seed data in the tables

    [back to Content Menu](#contents)
