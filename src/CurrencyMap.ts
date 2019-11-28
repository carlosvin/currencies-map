import { CurrencyFormatter } from "./CurrencyFormatter";
import { CODES } from "./codes";
import { Display } from "./types";

/** 
 * Map from currency codes to currency names or symbols
 */
export class CurrencyMap extends Map<string, string> {

    /** 
     * @param currencyDisplay Configure to show currency symbol or name 
     * */
    constructor(currencyDisplay: Display, locales?: string[]) {
        super(CODES
            .map<[string, string]>(c => [c, new CurrencyFormatter(currencyDisplay, c, locales).text])
            .sort((a, b) => a[1].localeCompare(b[1])));
    }
}
