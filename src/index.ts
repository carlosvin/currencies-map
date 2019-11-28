/** List with currency ISO codes */
const  CODES  = ["AED","AFN","ALL","AMD","ANG","AOA","ARS","AUD","AWG","AZN","BAM","BBD","BYN","BDT","BGN","BHD","BIF","BMD","BND","BOB","BRL","BSD","BTN","BWP","BYR","BZD","CAD","CDF","CHF","CLP","CNY","COP","CRC","CUP","CVE","CZK","DJF","DKK","DOP","DZD","EGP","ERN","ETB","EUR","FJD","FKP","GBP","GEL","GHS","GIP","GMD","GNF","GTQ","GYD","HKD","HNL","HRK","HTG","HUF","IDR","ILS","INR","IQD","IRR","ISK","JMD","JOD","JPY","KES","KGS","KHR","KMF","KPW","KRW","KWD","KYD","KZT","LAK","LBP","LKR","LRD","LSL","LTL","LYD","MAD","MDL","MGA","MKD","MMK","MNT","MOP","MUR","MVR","MWK","MXN","MYR","MZN","NAD","NGN","NIO","NOK","NPR","NZD","OMR","PAB","PEN","PGK","PHP","PKR","PLN","PYG","QAR","RON","RSD","RUB","RWF","SAR","SBD","SCR","SDG","SEK","SGD","SHP","SLL","STN","SOS","SRD","SSP","SYP","SZL","THB","TJS","TMT","TND","TOP","TRY","TTD","TWD","TZS","UAH","UGX","USD","UYU","UZS","VND","VUV","WST","XAF","XAG","XAU","XCD","XOF","XPF","YER","ZAR","ZMK","ZMW","ZWL"];

/** 
 * Map from currency codes to currency names or symbols
 */
class Currencies extends Map<string, string> {

    private static readonly RE = /(\d|,|\.)+/;

    /** 
     * @param currencyDisplay Configure to show currency symbol or name 
     * */
    constructor(currencyDisplay: 'symbol' | 'name', locales?: string[]) {
        super(CODES
            .map<[string, string]>(c => [c, Currencies._format(c, currencyDisplay, locales)])
            .sort((a, b) => a[1].localeCompare(b[1])));
    }

    /**
     * If currency value is equal to currency code it will use entries. 
     * E.g: MMK -> Myanmar Kiats is not available in Intl.NumberFormat for Android so you will get "MMK" value instead of "Myanmar Kiats". If you want to set default values for this case, you can load them using this method: loadDefaults([['MMK', 'A value to show']]).
     * @param defaults Pairs from currency code to currency value (symbol or name).
     * @returns current instance
     */
    loadDefaults(defaults: Iterable<[string, string]>) {
        for (const [code, defaultValue] of defaults) {
            const value = this.get(code);
            if (!value || value === code) {
                this.set(code, defaultValue);
            }
        }
        return this;
    }

    private static _format(currency: string, currencyDisplay: 'symbol' | 'name', locales?: string[]) {
        const formatter = new Intl.NumberFormat(
            locales, 
            { style: 'currency', currencyDisplay, currency });
        return Currencies._extract(formatter);
    }

    private static _extract(formatter: Intl.NumberFormat){
        return formatter.format(0).replace(Currencies.RE, '').trim();
    }

    private static _names: Currencies;

    /** 
     * @returns singleton instance of @see{Currencies} map from currency codes to localized currency names
     */
    static get names (): Currencies {
        if (!this._names) {
            this._names = new Currencies('name');
        }
        return this._names;
    }

    private static _symbols: Currencies;

    /** 
     * @returns singleton instance of @see{Currencies} map from currency codes to localized currency symbols
     */
    static get symbols (): Currencies {
        if (!this._symbols) {
            this._symbols = new Currencies('symbol');
        }
        return this._symbols;
    }
}
export { Currencies, CODES };
