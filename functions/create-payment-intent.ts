import dotenv from "dotenv";
dotenv.config();
import stripe from "stripe";

const stripeInstance = new stripe(process.env.VITE_APP_STRIPE_SECRET_KEY!, {
  apiVersion: "2022-11-15",
});

export const handler = async function (event) {
  const { shipping_fee, total_amount } = JSON.parse(event.body);

  const calculateOrderAmount = () => {
    return shipping_fee + total_amount;
  };

  try {
    const paymentIntent = await stripeInstance.paymentIntents.create({
      amount: calculateOrderAmount(),
      currency: "usd",
    });
    return {
      statusCode: 200,
      body: JSON.stringify({ clientSecret: paymentIntent.client_secret }),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.message }),
    };
  }
};
