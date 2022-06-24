// modules required for routing
import express from 'express';
const router = express.Router();
export default router;

import mongoose from 'mongoose';

// define the book model
import book from '../Models/books';

/* GET home page. wildcard */
router.get('/', (req, res, next) => {
  res.render('content/index', {
    title: 'Home',
    page: 'home',
    books: ''
   });
});

router.get('/books', (req, res, next) => 
{
 
      res.render('books/index', {
        title: 'Books',
        page: 'books',
        books: ''
      });
    
  });


module.exports = router;
