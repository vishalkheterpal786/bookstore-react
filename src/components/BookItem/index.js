import React from 'react';
import './bookItem.css';
const BookItem = ({ book, addToCart }) => {
  return (
    <div className='book-item'>
      <h3>{book.title}</h3>
      <p>Author: {book.author}</p>
      <p>Price: ${book.price.toFixed(2)}</p>
      <button onClick={() => addToCart(book.id, 1)}>Add to Cart</button>
    </div>
  );
};

export default BookItem;
