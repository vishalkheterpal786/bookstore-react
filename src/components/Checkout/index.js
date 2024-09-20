import React from 'react';

const Checkout = ({ cartItems }) => {
  const totalPrice = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div>
      <h2>Order Summary</h2>
      {cartItems.map((item) => (
        <div key={item.id}>
          <p>
            {item.title} - Quantity: {item.quantity} - Price: ${item.price.toFixed(2)}
          </p>
        </div>
      ))}
      <h3>Total: ${totalPrice.toFixed(2)}</h3>
      <button>Confirm Purchase</button>
    </div>
  );
};
export default Checkout;
