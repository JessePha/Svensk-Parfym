import { projectFirestore } from "../firestore/config";

export const getAllProducts = async (action, errorMessage) => {
  let items = [];
  let querySnapShot = await projectFirestore.collection("products").get();
  querySnapShot.forEach((doc) => {
    items.push({ ...doc.data(), id: doc.id });
  });
  action(items);
};

export const getSingleProduct = async (action, name, errorMessage) => {
  let querySnapShot = await projectFirestore.collection("products").get();
  try {
    querySnapShot.forEach((doc) => {
      if (doc.data().name === name) {
        action({ ...doc.data(), id: doc.id });
      }
    });
  } catch {
    errorMessage(true);
  }
};

export const updateProduct = (data) => {
  projectFirestore
    .collection("products")
    .doc(data.id)
    .update({ stock: data.updateProduct })
    .then(() => {})
    .catch(function (error) {});
};
