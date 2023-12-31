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
  console.log(increasedDiscount);
  console.log("Days until increased discount: " + daysUntilIncreasedDiscount);

  const discount = increasedDiscount ? 0.85 : 0.9;

  return [discount, daysUntilIncreasedDiscount];
};

const message = document.getElementById("message");
const [discount, daysUntilIncreasedDiscount] = getIncreasedDiscountInfo();
message.innerText = `Current discount: ${
  100 - discount * 100
}% \n Days until increased discount: ${daysUntilIncreasedDiscount}`;
