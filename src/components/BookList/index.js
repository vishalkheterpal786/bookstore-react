import React, { useEffect, useState } from 'react';
import BookItem from '../BookItem';
import AxiosHelper from '../../Utils/AxiosHelper';
import { useNavigate } from 'react-router-dom';

const BookList = () => {
  const [books, setBooks] = useState([]);
  const navigate = useNavigate();

  const handleShowCart = () => {
    navigate('/cart');
  };

  const addToCart = async (bookId, quantity) => {
    try {
      await AxiosHelper.post('/cart/addToCart', {
        bookId,
        quantity,
      });
    } catch (error) {
      console.error('Error adding book to cart', error);
    }
  };
  useEffect(() => {
    // Fetch books from the API
    AxiosHelper.get('/books/getAllBooks')
      .then((response) => setBooks(response.data))
      .catch((error) => console.error('Error fetching books:', error));
  }, []);
  return (
    <div>
      <h2>Book List</h2>
      <button onClick={() => handleShowCart()}>Show cart</button>
      <div className='book-list'>
        {books.map((book) => (
          <BookItem key={book.id} book={book} addToCart={addToCart} />
        ))}
      </div>
    </div>
  );
};

export default BookList;
