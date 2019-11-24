


const RE = /(\d|,|\.)+/;

export class Currencies {

    /** List with currency ISO codes */
    static readonly codes = ["BDT", "EUR", "XOF", "BGN", "BAM", "BBD", "XPF", "BMD", "BND", "BOB", "BHD", "BIF", "BTN", "JMD", "BWP", "WST", "BRL", "BSD", "BYR", "BZD", "RUB", "RWF", "RSD", "USD", "TMT", "TJS", "RON", "NZD", "GTQ", "GBP", "XAF", "JPY", "GYD", "GEL", "GNF", "GMD", "GIP", "GHS", "OMR", "TND", "JOD", "HRK", "HTG", "HUF", "HKD", "HNL", "AUD", "VEF", "NOK", "PYG", "IQD", "PAB", "PGK", "PEN", "PKR", "PHP", "PLN", "ZMK", "EGP", "ZAR", "VND", "SBD", "ETB", "SOS", "ZWL", "SAR", "ERN", "MDL", "MGA", "MAD", "UZS", "MMK", "MOP", "MNT", "MKD", "MUR", "MWK", "MVR", "XCD", "MRO", "UGX", "TZS", "MYR", "MXN", "ILS", "SHP", "FJD", "FKP", "DKK", "NIO", "NAD", "VUV", "NGN", "NPR", "CHF", "COP", "CNY", "CLP", "CAD", "CDF", "CZK", "CRC", "ANG", "CVE", "CUP", "SZL", "SYP", "KGS", "KES", "SSP", "SRD", "KHR", "KMF", "STD", "KRW", "KPW", "KWD", "SLL", "SCR", "KZT", "KYD", "SGD", "SEK", "SDG", "DOP", "DJF", "YER", "DZD", "UYU", "LBP", "LAK", "TWD", "TTD", "TRY", "LKR", "TOP", "LTL", "LRD", "LSL", "THB", "LYD", "AED", "AFN", "ISK", "IRR", "AMD", "ALL", "AOA", "ARS", "AWG", "INR", "AZN", "IDR", "UAH", "QAR", "MZN"];

    private readonly _displayConfig: Intl.NumberFormatOptions;

    /** @param currencyDisplay Configure to show currency symbol or name */
    constructor(currencyDisplay: 'symbol' | 'name') {
        this._displayConfig = { style: 'currency', currencyDisplay };
    }

    private readonly map = new Map<string, string>();

    /**
     * @param code Three letters currency ISO code
     * @returns currency representation: name or symbol depending on instance configuration
     */
    getName(code: string) {
        let name = this.map.get(code);
        if (name === undefined) {
            name = this._getName(code);
            this.map.set(code, name);
        }
        return name;
    }

    /**
     * @returns list of currency symbols or names depending on how instance was configured
     */
    get names() {
        return Currencies.codes.map(c => this.getName(c));
    }

    private _getName(currency: string) {
        const num = Number(0);
        const currencyNumber = num.toLocaleString(
            navigator.language,
            { ...this._displayConfig, currency });
        return currencyNumber.replace(RE, '').trim();
    }
}
