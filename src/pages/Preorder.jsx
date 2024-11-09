import React, { useEffect } from 'react';

const PaymentPage = () => {
  useEffect(() => {
    handlePayment();
  }, []);

  const handlePayment = () => {
    const options = {
      key: 'YOUR_RAZORPAY_KEY_ID', // Replace with your Razorpay key ID
      amount: '500000', // Amount in paise (500000 paise = 5000 INR)
      currency: 'INR',
      name: 'MINDSHIELD',
      description: 'Test Transaction',
      image: 'https://example.com/your_logo.png',
      handler: function (response) {
        // Handle successful payment here
        alert('Payment Successful!');
      },
      prefill: {
        name: 'Customer Name',
        email: 'customer@example.com',
        contact: '123456789'
      },
      theme: {
        color: '#3399cc'
      }
    };

    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  };

  return (
    <div>
      <h1>Pre-order your Smart Helmet</h1>
      <button onClick={handlePayment}>Pay Now</button>
    </div>
  );
};

export default PaymentPage;
