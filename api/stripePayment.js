export const fetchPaymentIntentClientSecret = async (email, amount) => {
  const apiUrl = process.env.EXPO_PUBLIC_API_URL;
  const response = await fetch(apiUrl, {
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
