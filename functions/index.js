const functions = require("firebase-functions");
const admin = require("firebase-admin");
admin.initializeApp(functions.config().firebase);

exports.createStripeCheckout = functions.https.onCall(async (data, context) => {
  const collections = "Orders";
  const stripe = require("stripe")(functions.config().stripe.secret_key);
  try {
    const result = await admin
        .firestore()
        .collection(collections)
        .add(data.order);
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: [
        {
          price_data: {
            currency: "sek",
            unit_amount: data.order.totalPrice * 100,
            product_data: {
              name: "Svensk Parfym",
            },
          },
          quantity: 1,
        },
      ],
      mode: "payment",
      success_url: `https://svenskparfym-b8f20.firebaseapp.com/purchase/${result.id}`,
      cancel_url: "https://svenskparfym-b8f20.firebaseapp.com//Checkout",
    });
    if (session) {
      return {msg: "Sucessfully create checkout", id: session.id};
    }
  } catch (error) {
    return {msg: error};
  }
});
