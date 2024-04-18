# CRUD with Express and Sequelize ORM


## Description

This is my simple backend project built with ExpressJS and Sequelize ORM.
This backend project has 5 features including :

- Inserting a new book data
- Get all books data
- Get a book data, based on ID
- Update a book data, based on ID
- Delete a book data,  based on ID

## How to use

- Inserting a book :
  http://localhost:3000/books (Method : POST)

  Data :
  - title | string (required)
  - publisher | string
  - author | string

- Get all books data :
  http://localhost:3000/books (Method : GET)

- Get a book data :
  http://localhost:3000/books/:id (Method : GET)

- Update a book data : 
  http://localhost:3000/books/:id (Method : PATCH)

  Data :
  - title | string (required)
  - publisher | string (required)
  - author | string (required)

- Delete a book data : 
  http://localhost:3000/books/:id (Method : DELETE)
