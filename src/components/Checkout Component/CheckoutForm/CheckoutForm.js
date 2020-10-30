import React, { useState } from "react";
import Styles from "./CheckoutForm.module.css";
import PayEx from "../../../shared/Images/payex.png";
import Visa from "../../../shared/Images/visa.jpg";
import { useHistory } from "react-router-dom";
import {
  validatePayment,
  makeOrder,
  updateUserAccount,
} from "../../../handlepayment/handlePayment";
import Message from "../../UI/messagePayment/message";
import classes from "./CheckoutForm.module.css";

const Checkout = ({ totalPrice, itemInCart, countries }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [adress, setAdress] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [zipcode, setZipcode] = useState("");
  const [city, setCity] = useState("");
  const [emailAdress, setEmailAdress] = useState("");
  const [country, setCountry] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("");
  const [cardNumber, setCardnumber] = useState("");
  const [cardHolder, setCardHolder] = useState("");
  const [cardExpire, setCardExpire] = useState("");
  const [cardCVV, setCardCVV] = useState("");
  const [payexUser, setPayexUser] = useState("");
  const [payExpass, setPayexPass] = useState("");
  const [access, setAccess] = useState(false);
  const [enoughMoney, setEnoughMoney] = useState(false);
  const [clickSubmit, setClickSubmit] = useState(false);
  const [size, setSize] = useState(false);
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
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let data = null;
    if (paymentMethod === "PayEx") {
      data = {
        paymentMethod: paymentMethod,
        payexUser: payexUser,
        payExpass: payExpass,
      };
    }
    if (paymentMethod === "VISA") {
      data = {
        paymentMethod: paymentMethod,
        cardNumber: cardNumber,
        cardHolder: cardHolder,
        cardExpire: cardExpire,
        cardCVV: cardCVV,
      };
    }
    const result = await validatePayment(data);
    setAccess(result.access);
    setClickSubmit(true);
    if (result.access && result.account >= totalPrice) {
      setEnoughMoney(true);
      setAccess(result.access);
      makeOrder(orders);
      updateUserAccount({
        type: paymentMethod,
        account: result.account - totalPrice,
        id: result.id,
      });
    }
  };
  const goBackToHomepage = () => {
    setEnoughMoney(false);
    setClickSubmit(false);
    history.push("/");
  };
  const handlePayment = () => {
    if (paymentMethod === "VISA") {
      return (
        <div>
          <input
            type="text"
            value={cardNumber}
            required={true}
            placeholder="Card Number"
            onChange={(e) => setCardnumber(e.target.value)}
          />
          <input
            type="text"
            value={cardHolder}
            required
            placeholder="Card Holder Name"
            onChange={(e) => setCardHolder(e.target.value)}
          />
          <input
            type="text"
            value={cardExpire}
            required
            placeholder="Expiration Date"
            onChange={(e) => setCardExpire(e.target.value)}
          />
          <input
            type="text"
            value={cardCVV}
            required
            placeholder="CCV/CID/CSC"
            onChange={(e) => setCardCVV(e.target.value)}
          />
          <input type="submit" value="Place Order" />
        </div>
      );
    } else if (paymentMethod === "PayEx") {
      return (
        <div>
          <input
            type="text"
            value={payexUser}
            required
            placeholder="Username"
            onChange={(e) => setPayexUser(e.target.value)}
          />
          <input
            type="password"
            value={payExpass}
            required
            placeholder="Password"
            onChange={(e) => setPayexPass(e.target.value)}
          />
          <input type="submit" value="Place Order" />
        </div>
      );
    } else {
      return null;
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
              size = {size && "5"}
              id="country"
              value={country}
              onClick = {() => setSize(!size)}
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
        <div className={Styles.paymentMethods}>
          <h3 className={Styles.h3}>Payment method:</h3>
          <img
            className={Styles.img}
            src={PayEx}
            alt="PayEx"
            onClick={() => setPaymentMethod("PayEx")}
          />
          <img
            className={Styles.img}
            src={Visa}
            alt="Visa"
            onClick={() => setPaymentMethod("VISA")}
          />
          {handlePayment()}
        </div>
      </form>
      {
        <Message
          text={access ? "Successfully" : "Invalid account"}
          buttonText={access ? "Continue" : "Try again"}
          isError={access}
          isClick={clickSubmit}
          closeInfo={() =>
            access ? goBackToHomepage() : setClickSubmit(false)
          }
        />
      }
    </div>
  );
};

export default Checkout;
