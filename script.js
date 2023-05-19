const currencyEl_one = document.getElementById("currency-one");
const currencyEl_two = document.getElementById("currency-two");
const amountEl_one = document.getElementById("amount-one");
const amountEl_two = document.getElementById("amount-two");
amountEl_two.disabled = true;

const rateEl = document.getElementById("rate");
const swap = document.getElementById("change-currency-btn");

// Fetch exchange rates and update the dome
function calculate() {
  const currency_one = amountEl_one.value;
  const currency_two = amountEl_two.value;

  if (currencyEl_one.value === "CNY") {
    let RUB = 11.41;
    const rate = currency_one * RUB;

    rateEl.innerText = `1 RMB = ${RUB} RUB`;
    amountEl_two.value = rate.toFixed(2);
  } else {
    let RMB = 0.09;
    const rate = currency_one * RMB;

    rateEl.innerText = `1 RUB = ${RMB} RMB`;
    amountEl_two.value = rate.toFixed(2);
  }

  // fetch(
  //   `https://v6.exchangerate-api.com/v6/61c7c32312c7e6c9667442ea/latest/${currency_one}`
  // )
  //   .then((res) => res.json())
  //   .then((data) => {
  //     //   console.log(data);
  //     const rate = data.conversion_rates[currency_two];
  //     rateEl.innerText = `1 ${currency_one} = ${rate} ${currency_two}`;

  //     amountEl_two.value = (amountEl_one.value * rate).toFixed(2);
  //   });
}

// Event Listeners
currencyEl_one.addEventListener("change", calculate);
amountEl_one.addEventListener("input", calculate);
currencyEl_two.addEventListener("change", calculate);
amountEl_two.addEventListener("input", calculate);
swap.addEventListener("click", () => {
  const temp = currencyEl_one.innerHTML;
  currencyEl_one.innerHTML = currencyEl_two.innerHTML;
  currencyEl_two.innerHTML = temp;
  calculate();
});

calculate();
