const userName = document.getElementById("username").value;

const kiloMeters = document.getElementById("kilometers").value;

console.log(typeof kiloMeters);
const userAge = document.getElementById("user-age");
const unitPrice = 0.21;

parseInt(userAge);

const basePrice = kiloMeters * unitPrice;

let ticketDiscount = 0;
console.log(typeof ticketDiscount);

const sendButton = document.getElementById("send-button");

sendButton.addEventListener("click", function () {
  if (userAge.value === "1") {
    ticketDiscount = basePrice * 0.2;
  } else if (userAge.value === "3") {
    ticketDiscount = basePrice * 0.4;
  } else if (userAge.value == "2") {
    ticketDiscount = 0;
  }

  const textUserName = (document.getElementById("user-name").innerHTML =
    userName);

  const textBasePrice = (document.getElementById("base-price").innerHTML =
    "€ " + basePrice);

  const finalPrice = basePrice - ticketDiscount;
  document.getElementById("final-price").innerHTML = "€ " + finalPrice;

  document.getElementById("discount-applicated").innerHTML =
    "€ " + ticketDiscount;
});
