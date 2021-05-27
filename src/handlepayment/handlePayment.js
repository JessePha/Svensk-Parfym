import { projectFirestore } from "../firestore/config";

export const validatePayment = async (data) => {
  let { paymentMethod } = data;
  const { payexUser, payExpass } = data;
  const { cardNumber, cardHolder, cardExpire, cardCVV } = data;
  let access = false;
  let account = 0;
  let expire = "";
  let id = "";
  if (paymentMethod === "PayEx") {
    if (payexUser !== "" && paymentMethod !== "") {
      await projectFirestore
        .collection(paymentMethod)
        .where(
          "firstname",
          "==",
          payexUser.charAt(0).toLocaleUpperCase() + payexUser.slice(1)
        )
        .where("password", "==", payExpass)
        .get()
        .then((querySnapShot) => {
          querySnapShot.forEach((doc) => {
            if (doc.data()) {
              access = true;
              account = doc.data().account;
              id = doc.id;
            }
          });
        })
        .catch((error) => console.log(error));
      return { access: access, account: account, id: id };
    }
  } else if (paymentMethod === "VISA") {
    if (
      cardNumber !== "" &&
      cardHolder !== "" &&
      cardExpire !== "" &&
      cardCVV !== ""
    ) {
      await projectFirestore
        .collection(paymentMethod)
        .where("cardholder", "==", cardHolder)
        .where("cardnumber", "==", cardNumber)
        .where("cardcw", "==", cardCVV)
        .get()
        .then((querySnapShot) => {
          querySnapShot.forEach((doc) => {
            if (doc.data()) {
              access = true;
              id = doc.id;
              account = doc.data().account;
              expire = doc.data().cardexpire;
            }
          });
        })
        .catch((error) => console.log(error));
      return { access: access, account: account, id: id, expire: expire };
    }
  }
};

export const makeOrder = async (data) => {
  const result = await projectFirestore.collection(data.type).add(data);
  return result.id;
};

export const updateUserAccount = async (data) => {
  await projectFirestore
    .collection(data.type)
    .doc(data.id)
    .update({ account: data.account })
    .then(() => {})
    .catch(function (error) {});
};
