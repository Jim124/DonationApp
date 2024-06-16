export const fetchPaymentIntentClientSecret = async (email, amount) => {
  const response = await fetch('http://10.0.2.2:3000/create-payment-intent', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify({
      email: email,
      currency: 'usd',
      amount: parseInt(amount) * 100,
    }),
  });
  const { clientSecret } = await response.json();
  return clientSecret;
};
