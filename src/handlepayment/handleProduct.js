import { projectFirestore } from "../firestore/config";

export const getProducts = (action, errorMessage) => {
  let items = [];
  projectFirestore
    .collection("products")
    .get()
    .then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        items.push({ ...doc.data(), id: doc.id });
      });
      action(items);
    })
    .catch((error) => {
      errorMessage(true);
    });
};

export const updateProduct = async (data) => {
  await projectFirestore
    .collection("products")
    .doc(data.id)
    .update({ stock: data.updateProduct })
    .then(() => {
      
    })
    .catch(function (error) {
    });
};
