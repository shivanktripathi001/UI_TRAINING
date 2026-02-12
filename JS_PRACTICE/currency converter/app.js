const API_KEY = 'd7be892149e8bd767025f175';
const BASE_URL = `https://v6.exchangerate-api.com/v6/${API_KEY}/latest/`;

const amount = document.getElementById('amount');
const fromCurrency = document.getElementById('fromCurrency');
const toCurrency = document.getElementById('toCurrency');
const convertBtn = document.getElementById('convertBtn');
const swapBtn = document.getElementById('swapBtn');
const result = document.getElementById('result');

// Populate dropdowns with all currencies
function populateDropdowns() {
    for (let code in currencyList) {
        const option1 = document.createElement('option');
        option1.value = code;
        option1.textContent = `${code} - ${currencyList[code]}`;
        fromCurrency.appendChild(option1);

        const option2 = document.createElement('option');
        option2.value = code;
        option2.textContent = `${code} - ${currencyList[code]}`;
        toCurrency.appendChild(option2);
    }
    fromCurrency.value = 'USD';
    toCurrency.value = 'INR';
}

populateDropdowns();

// Swap currencies
const swapCurrencies = () => {
    const temp = fromCurrency.value;
    fromCurrency.value = toCurrency.value;
    toCurrency.value = temp;
};

const convertCurrency = async () => {
    const amountValue = amount.value;
    const from = fromCurrency.value;
    const to = toCurrency.value;

    if (amountValue === '' || amountValue <= 0) {
        result.textContent = 'Please enter a valid amount';
        return;
    }

    try {
        const response = await fetch(`${BASE_URL}${from}`);
        const data = await response.json();
        
        if (data.result === 'success') {
            const rate = data.conversion_rates[to];
            const convertedAmount = (amountValue * rate).toFixed(2);
            result.textContent = `${amountValue} ${from} = ${convertedAmount} ${to}`;
        } else {
            result.textContent = 'Error fetching exchange rates';
        }
    } catch (error) {
        result.textContent = 'Error: ' + error.message;
    }
};

convertBtn.addEventListener('click', convertCurrency);
swapBtn.addEventListener('click', swapCurrencies);