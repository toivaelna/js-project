// Conversion rates
const rates = {
    USD: 1,
    EUR: 0.94,
    GBP: 0.83,
    SEK: 10.67
  };

  const symbols = {
    USD:"$",
    EUR:"€",
    GBP:"£",
    SEK:"Kr"
  }
  
  function convert() {
    // Get the user's input
    const amount = document.getElementById('amount').value;
    const from = document.getElementById('from').value;
    const to = document.getElementById('to').value;
    console.log(to);
    // Convert the amount
    const result = (amount * rates[to]) / rates[from];
    // Display the result

    document.getElementById('result').innerHTML = symbols[to] + result.toFixed(2);
  }
  