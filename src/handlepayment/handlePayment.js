import { projectFirestore } from "../firestore/config";

export const validatePayment = async (data) => {
  let { paymentMethod } = data;
  const { payexUser, payExpass } = data;
  const { cardNumber, cardHolder, cardExpire, cardCVV } = data;
  if (paymentMethod === "PayEx") {
    let access = false;
    let account = 0;
    let id = "";
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
    }
  }
};

export const makeOrder = async (data) => {
  let orderId = ""
  await projectFirestore
    .collection(data.type)
    .add(data)
    .then((docRef) => {
      orderId = docRef.id
    })
    .catch(function (error) {
      console.error("Error writing document: ", error);
    });
    return orderId
};

export const updateUserAccount = async (data) => {
  await projectFirestore
    .collection(data.type)
    .doc(data.id)
    .update({ account: data.account })
    .then(() => {
      console.log("Document successfully written!");
    })
    .catch(function (error) {
      console.error("Error writing document: ", error);
    });
};

export const updateProduct = async (data) => {
  await projectFirestore
    .collection(data.type)
    .doc(data.id)
    .update({ stock: data.stock })
    .then(() => {
      console.log("Document successfully written!");
    })
    .catch(function (error) {
      console.error("Error writing document: ", error);
    });
};


