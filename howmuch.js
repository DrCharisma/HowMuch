async function fetchBitcoinPrice() {
    const response = await fetch('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd');
    const data = await response.json();
    return data.bitcoin.usd;
}

async function calculate() {
    let input = document.getElementById('number').value;
    const btcPrice = await fetchBitcoinPrice();
    let howMuchBtc = input / 0.05;
    let todayPrice = (howMuchBtc * btcPrice).toLocaleString();
    document.getElementById('newnumber').innerHTML = todayPrice;
}

function space() {
    if (document.getElementById('newnumber').innerHTML.length % 2 != 0) {
        // Your code here
    }
}
