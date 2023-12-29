setTimeout(() => {
  var price = document.querySelector("[data-test='product-price-primary']");
  var priceText = price.querySelector("h2").innerText;

  var priceValue = parseFloat(priceText.substring(1));
  const [discount, _] = getIncreasedDiscountInfo();
  var colleaguePrice = priceValue * discount;

  const colleaguePriceText = `Colleague price (${
    100 - discount * 100
  }% off): £${colleaguePrice.toFixed(2)}`;
  price.querySelector("h2").innerHTML += `<div>${colleaguePriceText}</div>`;
}, 3000);

const getIncreasedDiscountInfo = () => {
  const todaysDate = new Date();
  const priorDiscountDate = new Date("11/17/23");
  const timeDifferenceSeconds =
    todaysDate.getTime() - priorDiscountDate.getTime();
  const timeDifference = Math.floor(
    timeDifferenceSeconds / (1000 * 60 * 60 * 24)
  );
  const increasedDiscount = timeDifference % 28 === 0;
  const daysUntilIncreasedDiscount = increasedDiscount
    ? 0
    : 28 - (timeDifference % 28);

  const discount = increasedDiscount ? 0.85 : 0.9;

  return [discount, daysUntilIncreasedDiscount];
};
