const message = document.getElementById("message")
const [discount, daysUntilIncreasedDiscount] = getIncreasedDiscountInfo()
message.innerText = `Current discount: ${discount}. \n Days until increased discount: ${daysUntilIncreasedDiscount}`

console.log("popup: ", message)

const getIncreasedDiscountInfo = () => {
  const todaysDate = new Date()
  const priorDiscountDate = new Date("11/17/23")
  console.log(todaysDate)
  const timeDifferenceSeconds =
    todaysDate.getTime() - priorDiscountDate.getTime()
  const timeDifference = Math.floor(
    timeDifferenceSeconds / (1000 * 60 * 60 * 24)
  )
  const increasedDiscount = timeDifference % 28 === 0
  const daysUntilIncreasedDiscount = increasedDiscount
    ? 0
    : 28 - (timeDifference % 28)
  console.log(increasedDiscount)
  console.log("Days until increased discount: " + daysUntilIncreasedDiscount)

  const discount = increasedDiscount ? 0.85 : 0.9

  return [discount, daysUntilIncreasedDiscount]
}
