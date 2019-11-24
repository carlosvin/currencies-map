export class Currencies extends Map<string, string> {

    private static readonly RE = /(\d|,|\.)+/;
    private static readonly NUM = Number(0);
    
    /** List with currency ISO codes */
    static readonly codes = ["BDT", "EUR", "XOF", "BGN", "BAM", "BBD", "XPF", "BMD", "BND", "BOB", "BHD", "BIF", "BTN", "JMD", "BWP", "WST", "BRL", "BSD", "BYR", "BZD", "RUB", "RWF", "RSD", "USD", "TMT", "TJS", "RON", "NZD", "GTQ", "GBP", "XAF", "JPY", "GYD", "GEL", "GNF", "GMD", "GIP", "GHS", "OMR", "TND", "JOD", "HRK", "HTG", "HUF", "HKD", "HNL", "AUD", "VEF", "NOK", "PYG", "IQD", "PAB", "PGK", "PEN", "PKR", "PHP", "PLN", "ZMK", "EGP", "ZAR", "VND", "SBD", "ETB", "SOS", "ZWL", "SAR", "ERN", "MDL", "MGA", "MAD", "UZS", "MMK", "MOP", "MNT", "MKD", "MUR", "MWK", "MVR", "XCD", "MRO", "UGX", "TZS", "MYR", "MXN", "ILS", "SHP", "FJD", "FKP", "DKK", "NIO", "NAD", "VUV", "NGN", "NPR", "CHF", "COP", "CNY", "CLP", "CAD", "CDF", "CZK", "CRC", "ANG", "CVE", "CUP", "SZL", "SYP", "KGS", "KES", "SSP", "SRD", "KHR", "KMF", "STD", "KRW", "KPW", "KWD", "SLL", "SCR", "KZT", "KYD", "SGD", "SEK", "SDG", "DOP", "DJF", "YER", "DZD", "UYU", "LBP", "LAK", "TWD", "TTD", "TRY", "LKR", "TOP", "LTL", "LRD", "LSL", "THB", "LYD", "AED", "AFN", "ISK", "IRR", "AMD", "ALL", "AOA", "ARS", "AWG", "INR", "AZN", "IDR", "UAH", "QAR", "MZN"];

    /** 
     * @param currencyDisplay Configure to show currency symbol or name 
     * */
    constructor(currencyDisplay: 'symbol' | 'name') {
        super();
        Currencies.codes.forEach(c => this.set(c, Currencies._format(c, currencyDisplay)));
    }

    private static _format(currency: string, currencyDisplay: 'symbol' | 'name') {
        const currencyNumber = Currencies.NUM.toLocaleString(
            navigator ? navigator.language : undefined, 
            { style: 'currency', currencyDisplay, currency });
        return currencyNumber.replace(Currencies.RE, '').trim();
    }
}
