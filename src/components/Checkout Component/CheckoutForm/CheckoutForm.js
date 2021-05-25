import React, { useState } from "react";
import Styles from "./CheckoutForm.module.css";
import { useHistory } from "react-router-dom";
import { makeOrder } from "../../../handlepayment/handlePayment";
import classes from "./CheckoutForm.module.css";
import { projectFunctions } from "../../../firestore/config";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";

const Checkout = ({
  totalPrice,
  itemInCart,
  countries,
  removeItemsFromCart,
}) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [adress, setAdress] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [zipcode, setZipcode] = useState("");
  const [city, setCity] = useState("");
  const [emailAdress, setEmailAdress] = useState("");
  const [country, setCountry] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("");
  const stripe = useStripe();
  let history = useHistory();
  let Customer = {
    FName: firstName,
    LName: lastName,
    Adress: adress,
    PhoneNumber: phoneNumber,
    ZipCode: zipcode,
    City: city,
    Email: emailAdress,
    Country: country,
    PaymentMethod: paymentMethod,
  };

  let orders = {
    type: "Orders",
    customer: { ...Customer },
    product: [...itemInCart],
    totalPrice: totalPrice,
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const createStripeCheckout = projectFunctions.httpsCallable(
        "createStripeCheckout"
      );
      const res = await createStripeCheckout();
      const sessionId = res.data.id;
      stripe.redirectToCheckout({ sessionId: sessionId });
      //let id = await makeOrder(orders);
      // removeItemsFromCart();
      // localStorage.clear("itemCart");
      // history.push(`/purchase/${id}`);
    } catch (error) {
      console.log("something went wrong: ", error);
    }
  };

  return (
    <div className={Styles.formDiv}>
      <form onSubmit={handleSubmit}>
        <div className={Styles.userInfo}>
          <h3 className={Styles.h3}>Billing Details:</h3>
          <br />
          <label className={Styles.label} htmlFor="firstName">
            First name
            <span className={Styles.required}>*</span>
          </label>
          <input
            className="names"
            id="firstName"
            type="text"
            required
            value={firstName}
            placeholder="First Name"
            onChange={(e) => setFirstName(e.target.value)}
          />
          <label className={Styles.label} htmlFor="lastName">
            Last Name <span className={Styles.required}>*</span>
          </label>
          <input
            className="names"
            id="lastName"
            type="text"
            required
            value={lastName}
            placeholder="Last Name"
            onChange={(e) => setLastName(e.target.value)}
          />
          <label className={Styles.label} htmlFor="adress">
            Adress <span className={Styles.required}>*</span>
          </label>
          <input
            id="adress"
            type="text"
            required={true}
            value={adress}
            placeholder="Street name and House number"
            onChange={(e) => setAdress(e.target.value)}
          />
          <label className={Styles.label} htmlFor="zipCode">
            Zip code <span className={Styles.required}>*</span>
          </label>
          <input
            id="zipCode"
            type="text"
            required
            value={zipcode}
            onChange={(e) => setZipcode(e.target.value)}
          />
          <label className={Styles.label} htmlFor="city">
            City <span className={Styles.required}>*</span>
          </label>
          <input
            id="city"
            type="text"
            required
            value={city}
            placeholder="City or Town"
            onChange={(e) => setCity(e.target.value)}
          />
          <label className={Styles.label} htmlFor="phoneNumber">
            Phone Number <span className={Styles.required}>*</span>
          </label>
          <input
            id="phoneNumber"
            type="text"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
          <label className={Styles.label} htmlFor="emailAdress">
            Email Adress <span className={Styles.required}>*</span>
          </label>
          <input
            id="emailAdress"
            type="text"
            required
            value={emailAdress}
            onChange={(e) => setEmailAdress(e.target.value)}
          />
          <label className={Styles.label} htmlFor="country">
            Country <span className={Styles.required}>*</span>
          </label>
          <div className={classes.selectContainer}>
            <select
              id="country"
              value={country}
              onChange={(e) => setCountry(e.target.value)}
            >
              <option value="">Select country</option>
              {countries.map((country) => (
                <option key={country} value={country}>
                  {country}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div>
          <button type="submit">Slutför köp</button>
        </div>
      </form>
    </div>
  );
};

export default Checkout;
