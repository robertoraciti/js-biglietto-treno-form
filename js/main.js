const kiloMeters = prompt("Inserisci qui i kilometri che vuoi percorrere");
const userAge = prompt("Inserisci qui la tua età");
const unitPrice = 0.21;
const under = 18;
const over = 65;

parseInt(kiloMeters);
parseInt(userAge);

const fullPrice = kiloMeters * unitPrice;

const underDiscount = (fullPrice * 20) / 100;
const overDiscount = (fullPrice * 40) / 100;
const underPrice = fullPrice - underDiscount;

const overPrice = fullPrice - overDiscount;

if (userAge < under) {
  let finalPrice = `
<h3>Il prezzo del tuo biglietto è:</h3>
<p>€ ${underPrice} `;

  document.getElementById("final-price").innerHTML = finalPrice;
} else if (userAge > over) {
  let finalPrice = `
  <h3>Il prezzo del tuo biglietto è:</h3>
  <p>€ ${overPrice} `;

  document.getElementById("final-price").innerHTML = finalPrice;
} else {
  let finalPrice = `
  <h3>Il prezzo del tuo biglietto è:</h3>
  <p>€ ${fullPrice} `;

  document.getElementById("final-price").innerHTML = finalPrice;
}
