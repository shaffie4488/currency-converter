// Exchange rates relative to USD
const rates = {
    USD: 1,
    EUR: 0.92,
    INR: 83,
    GBP: 0.81,
    JPY: 149
};

function convert() {
    let amount = parseFloat(document.getElementById("amount").value);
    let from = document.getElementById("fromCurrency").value;
    let to = document.getElementById("toCurrency").value;

    if(isNaN(amount)) {
        document.getElementById("result").innerText = "Please enter a valid number!";
        return;
    }

    let result = (amount / rates[from]) * rates[to];
    document.getElementById("result").innerText = `${amount} ${from} = ${result.toFixed(2)} ${to}`;
}
