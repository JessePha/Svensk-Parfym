export const addTotalPrice = (itemsInCart) => {
  let price = Object.values(itemsInCart)
    .map((item) => item.price * item.count)
    .reduce((num, sum) => {
      return num + sum;
    }, 0);
    return price
};

export const addTotalAmount = (itemsInCart) => {
  let amount = Object.values(itemsInCart)
    .map((item) => item.count)
    .reduce((num, sum) => {
      return num + sum;
    }, 0);

  return amount;
};
