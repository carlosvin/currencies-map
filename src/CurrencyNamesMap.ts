import { CurrencyMap } from "./CurrencyMap";
import { CODES } from "./codes";

const NAMES = ["United Arab Emirates Dirham","Afghan Afghani","Albanian Lek","Armenian Dram","Netherlands Antillean Guilder","Angolan Kwanza","Argentine Peso","Australian Dollar","Aruban Florin","Azerbaijani Manat","Bosnia-Herzegovina Convertible Mark","Barbadian Dollar","Bangladeshi Taka","Bulgarian Lev","Bahraini Dinar","Burundian Franc","Bermudan Dollar","Brunei Dollar","Bolivian Boliviano","Brazilian Real","Bahamian Dollar","Bitcoin","Bhutanese Ngultrum","Botswanan Pula","Belarusian Ruble","Belize Dollar","Canadian Dollar","Congolese Franc","Swiss Franc","Chilean Unit of Account (UF)","Chilean Peso","Chinese Yuan (Offshore)","Chinese Yuan","Colombian Peso","Costa Rican Colón","Cuban Convertible Peso","Cuban Peso","Cape Verdean Escudo","Czech Republic Koruna","Djiboutian Franc","Danish Krone","Dominican Peso","Algerian Dinar","Egyptian Pound","Eritrean Nakfa","Ethiopian Birr","Euro","Fijian Dollar","Falkland Islands Pound","British Pound Sterling","Georgian Lari","Guernsey Pound","Ghanaian Cedi","Gibraltar Pound","Gambian Dalasi","Guinean Franc","Guatemalan Quetzal","Guyanaese Dollar","Hong Kong Dollar","Honduran Lempira","Croatian Kuna","Haitian Gourde","Hungarian Forint","Indonesian Rupiah","Israeli New Sheqel","Manx pound","Indian Rupee","Iraqi Dinar","Iranian Rial","Icelandic Króna","Jersey Pound","Jamaican Dollar","Jordanian Dinar","Japanese Yen","Kenyan Shilling","Kyrgystani Som","Cambodian Riel","Comorian Franc","North Korean Won","South Korean Won","Kuwaiti Dinar","Cayman Islands Dollar","Kazakhstani Tenge","Laotian Kip","Lebanese Pound","Sri Lankan Rupee","Liberian Dollar","Lesotho Loti","Libyan Dinar","Moroccan Dirham","Moldovan Leu","Malagasy Ariary","Macedonian Denar","Myanma Kyat","Mongolian Tugrik","Macanese Pataca","Mauritanian Ouguiya (pre-2018)","Mauritanian Ouguiya","Mauritian Rupee","Maldivian Rufiyaa","Malawian Kwacha","Mexican Peso","Malaysian Ringgit","Mozambican Metical","Namibian Dollar","Nigerian Naira","Nicaraguan Córdoba","Norwegian Krone","Nepalese Rupee","New Zealand Dollar","Omani Rial","Panamanian Balboa","Peruvian Nuevo Sol","Papua New Guinean Kina","Philippine Peso","Pakistani Rupee","Polish Zloty","Paraguayan Guarani","Qatari Rial","Romanian Leu","Serbian Dinar","Russian Ruble","Rwandan Franc","Saudi Riyal","Solomon Islands Dollar","Seychellois Rupee","Sudanese Pound","Swedish Krona","Singapore Dollar","Saint Helena Pound","Sierra Leonean Leone","Somali Shilling","Surinamese Dollar","South Sudanese Pound","São Tomé and Príncipe Dobra (pre-2018)","São Tomé and Príncipe Dobra","Salvadoran Colón","Syrian Pound","Swazi Lilangeni","Thai Baht","Tajikistani Somoni","Turkmenistani Manat","Tunisian Dinar","Tongan Pa'anga","Turkish Lira","Trinidad and Tobago Dollar","New Taiwan Dollar","Tanzanian Shilling","Ukrainian Hryvnia","Ugandan Shilling","United States Dollar","Uruguayan Peso","Uzbekistan Som","Venezuelan Bolívar Fuerte (Old)","Venezuelan Bolívar Soberano","Vietnamese Dong","Vanuatu Vatu","Samoan Tala","CFA Franc BEAC","Silver Ounce","Gold Ounce","East Caribbean Dollar","Special Drawing Rights","CFA Franc BCEAO","Palladium Ounce","CFP Franc","Platinum Ounce","Yemeni Rial","South African Rand","Zambian Kwacha","Zimbabwean Dollar"];


/** 
 * Map from currency codes to currency names
 */
class CurrencyNamesMap extends CurrencyMap {

    constructor(locales?: string[]) {
        super('name', locales);
        this._fixMissingNames();
    }

    private _fixMissingNames(){
        for (let i=0; i < CODES.length; i++) {
            if (this.get(CODES[i]) === CODES[i]) {
                this.set(CODES[i], NAMES[i]);
            }
        }
    }
}

const currenciesNamesMap = new CurrencyNamesMap();
export default currenciesNamesMap;