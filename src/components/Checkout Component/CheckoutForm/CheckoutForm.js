import React, { useState } from "react";
import Styles from "./CheckoutForm.module.css";
import classes from "./CheckoutForm.module.css";
import { projectFunctions } from "../../../firestore/config";
import { useStripe } from "@stripe/react-stripe-js";
import CheckoutList from "../CheckoutList/CheckoutList";

const Checkout = ({
  totalPrice,
  itemInCart,
  countries,
}) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [adress, setAdress] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [zipcode, setZipcode] = useState("");
  const [city, setCity] = useState("");
  const [emailAdress, setEmailAdress] = useState("");
  const [country, setCountry] = useState("");
  const [loading, setLoading] = useState(false);
  const stripe = useStripe();
  let Customer = {
    FName: firstName,
    LName: lastName,
    Adress: adress,
    PhoneNumber: phoneNumber,
    ZipCode: zipcode,
    City: city,
    Email: emailAdress,
    Country: country,
  };

  let orders = {
    type: "Orders",
    customer: { ...Customer },
    product: [...itemInCart],
    totalPrice: totalPrice,
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const createStripeCheckout = projectFunctions.httpsCallable(
        "createStripeCheckout"
      );
      const result = await createStripeCheckout({ order: orders });
      const sessionId = result.data.id;
      stripe.redirectToCheckout({ sessionId: sessionId });
    } catch (error) {
      console.log("something went wrong: ", error);
    }
    setLoading(false);
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
          <CheckoutList />
          <div className={classes.placeOrderButtonContainer}>
            <button
              disabled={loading}
              className={loading ? classes.disableButton : classes.placeOrderButton}
              type="submit"
            >
              {loading ?
                "Processing. . .": "Place order"}
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Checkout;
