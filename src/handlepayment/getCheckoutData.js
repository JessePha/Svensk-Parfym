import { projectFirestore } from "../firestore/config";

export const checkoutData = async (action, errorMessage) => {
  let items = [];
  try {
    let querySnapShot = await projectFirestore.collection("checkout").get();
    querySnapShot.forEach((doc) => {
      items.push({ ...doc.data(), id: doc.id });
    });
  } catch {
    errorMessage(true);
  }
  action(items);
};


export const policyData = async (action, errorMessage) => {
  let items = [];
  try {
    let querySnapShot = await projectFirestore.collection("Policy").get();
    querySnapShot.forEach((doc) => {
      items.push({ ...doc.data()});
    });
  } catch {
    errorMessage(true);
  }
  action(items);
};

