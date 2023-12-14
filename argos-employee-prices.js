setTimeout(() => {
  console.log("argos employee prices")
  var price = document.querySelector("[data-test='product-price-primary']")
  var priceText = price.querySelector("h2").innerText

  var priceValue = parseFloat(priceText.substring(1))
  const [discount, _] = getIncreasedDiscountInfo()
  var employeePrice = priceValue * discount

  const employeePriceText = "Employee price: £" + employeePrice.toFixed(2)
  price.querySelector("h2").innerHTML += `<div>${employeePriceText}</div>`
}, 3000)

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
