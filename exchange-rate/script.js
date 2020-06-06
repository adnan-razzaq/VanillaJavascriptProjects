const currencyEl_one = document.getElementById("currency-one");
const amountEl_one = document.getElementById("amount-one");
const currencyEl_two = document.getElementById("currency-two");
const amountEl_two = document.getElementById("amount-two");
const rateEl = document.getElementById("rate");
const swap = document.getElementById("swap");

function calculate() {
  const currency1 = currencyEl_one.value;
  console.log(currency1);

  const currency2 = currencyEl_two.value;
  const amount1 = amountEl_one.value;
  fetch(
    `https://v6.exchangerate-api.com/v6/2ca22287547cdb58176cc22c/latest/${currency1}`
  )
    .then((res) => res.json())
    .then((data) => {
      console.log(data);

      const rate = data.conversion_rates[currency2];
      rateEl.innerText = `1 ${currency1}=${rate} ${currency2}`;
      amountEl_two.value = (amount1 * rate).toFixed();
    })

    .catch((error) => console.log(error));
}

currencyEl_one.addEventListener("change", calculate);
amountEl_one.addEventListener("input", calculate);
currencyEl_two.addEventListener("change", calculate);
amountEl_two.addEventListener("input", calculate);
swap.addEventListener("click", () => {
  const temp = currencyEl_one.value;
  currencyEl_one.value = currencyEl_two.value;
  currencyEl_two.value = temp;
});
