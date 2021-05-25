const functions = require("firebase-functions");
const admin = require("firebase-admin");
admin.initializeApp(functions.config().firebase);

exports.createStripeCheckout = functions.https.onCall(async (data, context) => {
  const stripe = require("stripe")(functions.config().stripe.secret_key);
  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: [
        {
          price_data: {
            currency: "sek",
            unit_amount: (100) * 100,
            product_data: {
              name: "perfume",
            },
          },
          quantity: 1,
        },
      ],
      mode: "payment",
      success_url: "http://localhost:3000",
      cancel_url: "http://localhost:3000/Checkout",
    });
    if (session) {
      return {msg: "Sucessfully create checkout", id: session.id};
    }
  } catch (error) {
    return {msg: error};
  }
});
