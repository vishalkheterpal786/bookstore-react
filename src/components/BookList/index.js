import React, { useEffect, useState } from 'react';
import BookItem from '../BookItem';
import AxiosHelper from '../../Utils/AxiosHelper';
import { useNavigate } from 'react-router-dom';
import { BOOK_ENDPOINTS, CART_ENDPOINTS } from '../../Utils/Constants';
const BookList = () => {
  const [books, setBooks] = useState([]);
  const navigate = useNavigate();

  const handleShowCart = () => {
    navigate('/cart');
  };

  const addToCart = async (bookId, quantity) => {
    try {
      await AxiosHelper.post(CART_ENDPOINTS.ADD_TO_CART, {
        bookId,
        quantity,
      });
    } catch (error) {
      console.error('Error adding book to cart', error);
    }
  };
  useEffect(() => {
    // Fetch books from the API
    AxiosHelper.get(BOOK_ENDPOINTS.GET_ALL_BOOKS)
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
