import { Display } from "./types";

export class CurrencyFormatter {
    private static readonly RE = /(\d|,|\.)+/;
    readonly formatter: Intl.NumberFormat;
    readonly currency: string;

    constructor(currencyDisplay: Display, currency: string, locales?: string[]) {
        this.formatter = new Intl.NumberFormat(
            locales, { style: 'currency', currencyDisplay, currency });
        this.currency = currency;
    }

    get text() {
        return this.formatter.format(0).replace(CurrencyFormatter.RE, '').trim();
    }
}
