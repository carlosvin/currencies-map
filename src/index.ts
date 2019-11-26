/** List with currency ISO codes */
const  CODES  = ["AED","AFN","ALL","AMD","ANG","AOA","ARS","AUD","AWG","AZN","BAM","BBD","BDT","BGN","BHD","BIF","BMD","BND","BOB","BRL","BSD","BTN","BWP","BYR","BZD","CAD","CDF","CHF","CLP","CNY","COP","CRC","CUP","CVE","CZK","DJF","DKK","DOP","DZD","EGP","ERN","ETB","EUR","FJD","FKP","GBP","GEL","GHS","GIP","GMD","GNF","GTQ","GYD","HKD","HNL","HRK","HTG","HUF","IDR","ILS","INR","IQD","IRR","ISK","JMD","JOD","JPY","KES","KGS","KHR","KMF","KPW","KRW","KWD","KYD","KZT","LAK","LBP","LKR","LRD","LSL","LTL","LYD","MAD","MDL","MGA","MKD","MMK","MNT","MOP","MRO","MUR","MVR","MWK","MXN","MYR","MZN","NAD","NGN","NIO","NOK","NPR","NZD","OMR","PAB","PEN","PGK","PHP","PKR","PLN","PYG","QAR","RON","RSD","RUB","RWF","SAR","SBD","SCR","SDG","SEK","SGD","SHP","SLL","SOS","SRD","SSP","STD","SYP","SZL","THB","TJS","TMT","TND","TOP","TRY","TTD","TWD","TZS","UAH","UGX","USD","UYU","UZS","VEF","VND","VUV","WST","XAF","XCD","XOF","XPF","YER","ZAR","ZMK","ZWL"];

class Currencies extends Map<string, string> {

    private static readonly RE = /(\d|,|\.)+/;
    private static readonly NUM = Number(0);

    /** 
     * @param currencyDisplay Configure to show currency symbol or name 
     * */
    constructor(currencyDisplay: 'symbol' | 'name') {
        super(CODES
            .map<[string, string]>(c => [c, Currencies._format(c, currencyDisplay)])
            .sort((a, b) => a[1].localeCompare(b[1])));
    }

    private static _format(currency: string, currencyDisplay: 'symbol' | 'name') {
        const currencyNumber = Currencies.NUM.toLocaleString(
            typeof window === 'undefined' ? undefined : navigator.language, 
            { style: 'currency', currencyDisplay, currency });
        return currencyNumber.replace(Currencies.RE, '').trim();
    }

    private static _names: Currencies;

    static get names () : Currencies {
        if (!this._names) {
            this._names = new Currencies('name');
        }
        return this._names;
    }

    private static _symbols: Currencies;

    static get symbols () : Currencies {
        if (!this._symbols) {
            this._symbols = new Currencies('symbol');
        }
        return this._symbols;
    }
}
export { Currencies, CODES };
