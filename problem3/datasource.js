// your code here:
class Datasource {
    // Datasource utility class
    async getPrices() {
        // use fetch API to fetch json data
        const response = await fetch("https://interview.switcheo.com/test.json")
        if (!response.ok) {
            const message = `An error has occured: ${response.status}`;
            throw new Error(message)
        }
        // returns promise resolved to JSON object
        const data = await response.json()
        return data.data.prices.map((price) => new Price(price.buy, price.sell, price.id, price.pair, price.timestamp))
    }
}

// price class to capture the price in the pricearray
class Price {
    constructor(buy, sell, id, pair, timestamp) {
        this.buy = buy
        this.sell = sell
        this.id = id
        this.pair = pair
        this.timestamp = timestamp
    }

    // mid function returns the midpoint between price.buy and price.sell
    mid() {
        return (this.buy + this.sell) / 200
    }

    // quote function returns the quote currency
    quote() {
        const str = String(this.pair)
        return str.slice(-3)
    }
}

const ds = new Datasource()


ds.getPrices()
    .then(prices => {
        prices.forEach(price => {
            console.log(`Mid price for ${ price.pair } is ${ price.mid() } ${ price.quote() }.`);
        });
    }).catch(error => {
        console.err(error);
    });