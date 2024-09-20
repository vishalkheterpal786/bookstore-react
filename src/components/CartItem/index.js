import React from 'react';

const CartItem = ({ item, removeFromCart, updateQuantity }) => {
  return (
    <div className='cart-item'>
      <h4>{item.title}</h4>
      <p>Price: ${item.price.toFixed(2)}</p>
      <p>
        Quantity:
        <input
          type='number'
          value={item.quantity}
          onChange={(e) => updateQuantity(item.id, parseInt(e.target.value))}
          min='1'
        />
      </p>
      <button onClick={() => removeFromCart(item.id)}>Remove</button>
    </div>
  );
};

export default CartItem;
