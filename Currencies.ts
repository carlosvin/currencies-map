import codes from './codes';

export class Currencies extends Map<string, string> {

    private static readonly RE = /(\d|,|\.)+/;
    private static readonly NUM = Number(0);

    /** 
     * @param currencyDisplay Configure to show currency symbol or name 
     * */
    constructor(currencyDisplay: 'symbol' | 'name') {
        super();
        codes.forEach(c => this.set(c, Currencies._format(c, currencyDisplay)));
    }

    private static _format(currency: string, currencyDisplay: 'symbol' | 'name') {
        const currencyNumber = Currencies.NUM.toLocaleString(
            navigator ? navigator.language : undefined, 
            { style: 'currency', currencyDisplay, currency });
        return currencyNumber.replace(Currencies.RE, '').trim();
    }
}
