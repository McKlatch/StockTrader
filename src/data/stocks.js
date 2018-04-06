/*jshint esversion: 6 */
const symbolsArray = ['TSLA','GOOGL','AAPL','TWTR','EBAY'];
const stockPoint = 'https://api.iextrading.com/1.0/tops/last';
const symbolPoint = 'https://api.iextrading.com/1.0/stock/market/batch';
const stocksArray = [];

function shorten(name) {
	return name.replace(/,?\s*(llc|inc|co|corporation|plc|company)\.?$/i, '').substring(0, 24);
}
function shuffle(a) {
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
}

// get top trading stock symbols
fetch(stockPoint)
  .then(blob => blob.json())
  .then(data => {
  	for (var i = 0; i < 10; i++) {
      if (!symbolsArray.includes(data[i].symbol)) {
      	symbolsArray.push(data[i].symbol);
      }
    }
  })
  .then(() => {
  	shuffle(symbolsArray);
  	// get stock data by symbol
	fetch(symbolPoint + `?symbols=${symbolsArray.join()}&types=quote`)
  	.then(blob => blob.json())
  	.then(data => {
  		for(var item in data) {
				stocksArray.push({
      		id: data[item].quote.symbol, name: shorten(data[item].quote.companyName), price: Math.round(data[item].quote.latestPrice)
      	});
			}
  	});
  });

export default stocksArray || [
	{ id: 'TSLA', name: 'Tesla', price: 352 },
	{ id: 'GOOGL', name: 'Google', price: 1002 },
	{ id: 'AAPL', name: 'Apple', price: 155 },
	{ id: 'TWTR', name: 'Twitter', price: 17 }
];