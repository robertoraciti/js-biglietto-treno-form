const userName = document.getElementById("username");
const kiloMeters = document.getElementById("kilometers");
const userAge = document.getElementById("user-age");

const sendButton = document.getElementById("send-button");
const resetButton = document.getElementById("reset-button");

const ticketSection = document.getElementById("ticket");
const textUserNameElement = document.getElementById("user-name");
const textBasePriceElement = document.getElementById("base-price");
const ticketFinalPriceElement = document.getElementById("final-price");
const ticketDiscountAppElement = document.getElementById("discount-applicated");
let ticketDiscount = 0;

sendButton.addEventListener("click", function () {
  const userNameValue = userName.value;
  const kiloMetersValue = parseFloat(kiloMeters.value);
  const userAgeValue = userAge.value;
  const unitPrice = 0.21;
  const basePrice = kiloMetersValue * unitPrice;

  if (userAgeValue == "1") {
    ticketDiscount = basePrice * 0.2;
  } else if (userAgeValue == "3") {
    ticketDiscount = basePrice * 0.4;
  } else if (userAgeValue == "2") {
    ticketDiscount = 0;
  }

  textUserNameElement.innerHTML = userNameValue;

  textBasePriceElement.innerHTML = "€ " + basePrice.toFixed(2);

  const finalPrice = basePrice - ticketDiscount;
  ticketFinalPriceElement.innerHTML = "€ " + finalPrice.toFixed(2);

  ticketDiscountAppElement.innerHTML = "€ " + ticketDiscount.toFixed(2);

  ticketSection.classList.remove("d-none");
});

resetButton.addEventListener("click", function () {
  ticketSection.classList.add("d-none");
});
