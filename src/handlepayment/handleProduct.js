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

export const prepareUpdateStock = (itemInCart) => {
  let temp = itemInCart.map((item) => {
    if (item.size === "30ml bottle") {
      item.stock = [item.stock[0] - item.count, item.stock[1]];
    } else if (item.size === "5ml Deluxe sample") {
      item.stock = [item.stock[0], item.stock[1] - item.count];
    }
    else if (item.size === "3 x 5ml"){
      item.stock -= item.count
    }
    return item;
  });

  const seen = new Set();
  const filteredArr = temp.filter((item) => {
    const duplicate = seen.has(item.id);
    seen.add(item.id);
    return !duplicate;
  });
  let temp2 = filteredArr.map((item) => {
    let arr = [];
    let hello = temp.map((hello1) => {
      if (hello1.id === item.id && hello1.size === "30ml bottle") {
        arr.push(hello1.stock[0]);
        return arr;
      } else if (
        hello1.id === item.id &&
        hello1.size === "5ml Deluxe sample"
      ) {
        arr.push(hello1.stock[1]);
        return arr;
      } else {
        return hello1.stock
      }
    });
    if (arr.length < 2 && item.size === "30ml bottle") {
      arr.push(item.stock[1]);
    } else if (arr.length < 2 && item.size === "5ml Deluxe sample") {
      arr.push(item.stock[0]);
    }

    const seen1 = new Set();
    const filteredArr = hello.filter((item) => {
      const duplicate = seen1.has(item);
      seen1.add(item);
      return !duplicate;
    });
    filteredArr.map((itm) => {
      if (itm !== undefined) {
        item.stock = itm;
      }
    });
    return item;
  });
  return temp2
};
