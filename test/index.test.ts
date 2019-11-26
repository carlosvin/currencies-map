import { Currencies } from '../src/index';

let languageGetter: any;

beforeEach(() => {
    languageGetter = jest.spyOn(window.navigator, 'language', 'get')
})

test('Load names singleton', async () => {
    languageGetter.mockReturnValue('en-GB');
    expect(Currencies.names.get('THB')).toStrictEqual('Thai baht');
});

test('Load symbols singleton', async () => {
    languageGetter.mockReturnValue('es-ES');
    expect(Currencies.symbols.get('EUR')).toStrictEqual('€');
});

test('Euro symbol en-GB', () => {
    languageGetter.mockReturnValue('en-GB');
    const cs = new Currencies('symbol');
    expect(cs.get('EUR')).toStrictEqual('€');
});

test('Myanmar kyats name es-ES', () => {
    languageGetter.mockReturnValue('es-ES');
    const cs = new Currencies('name');
    expect(cs.get('MMK')).toStrictEqual('kiats');
});

test('Myanmar kyats name en-GB', () => {
    languageGetter.mockReturnValue('en-GB');
    const cs = new Currencies('name');
    expect(cs.get('MMK')).toStrictEqual('Myanmar kyats');
});

test('USD name and symbol es-ES', () => {
    languageGetter.mockReturnValue('es-ES');
    expect(new Currencies('name').get('USD')).toStrictEqual('dólares estadounidenses');
    expect(new Currencies('symbol').get('USD')).toStrictEqual('US$');
});

test('Load all names', () => {
    languageGetter.mockReturnValue('es-ES');
    expect([...new Currencies('name').values()]).toStrictEqual(currencyNames);
});

test('Load all symbols', () => {
    languageGetter.mockReturnValue('es-ES');
    expect([...new Currencies('symbol').values()]).toStrictEqual(currencySymbols);
});

const currencySymbols = ["BDT",
    "€",
    "XOF",
    "BGN",
    "BAM",
    "BBD",
    "CFPF",
    "BMD",
    "BND",
    "BOB",
    "BHD",
    "BIF",
    "BTN",
    "JMD",
    "BWP",
    "WST",
    "BRL",
    "BSD",
    "BYR",
    "BZD",
    "RUB",
    "RWF",
    "RSD",
    "US$",
    "TMT",
    "TJS",
    "RON",
    "NZD",
    "GTQ",
    "GBP",
    "XAF",
    "JPY",
    "GYD",
    "GEL",
    "GNF",
    "GMD",
    "GIP",
    "GHS",
    "OMR",
    "TND",
    "JOD",
    "HRK",
    "HTG",
    "HUF",
    "HKD",
    "HNL",
    "AUD",
    "VEF",
    "NOK",
    "PYG",
    "IQD",
    "PAB",
    "PGK",
    "PEN",
    "PKR",
    "PHP",
    "PLN",
    "ZMK",
    "EGP",
    "ZAR",
    "₫",
    "SBD",
    "ETB",
    "SOS",
    "ZWL",
    "SAR",
    "ERN",
    "MDL",
    "MGA",
    "MAD",
    "UZS",
    "MMK",
    "MOP",
    "MNT",
    "MKD",
    "MUR",
    "MWK",
    "MVR",
    "XCD",
    "MRO",
    "UGX",
    "TZS",
    "MYR",
    "MXN",
    "ILS",
    "SHP",
    "FJD",
    "FKP",
    "DKK",
    "NIO",
    "NAD",
    "VUV",
    "NGN",
    "NPR",
    "CHF",
    "COP",
    "CNY",
    "CLP",
    "CA$",
    "CDF",
    "CZK",
    "CRC",
    "ANG",
    "CVE",
    "CUP",
    "SZL",
    "SYP",
    "KGS",
    "KES",
    "SSP",
    "SRD",
    "KHR",
    "KMF",
    "STD",
    "KRW",
    "KPW",
    "KWD",
    "SLL",
    "SCR",
    "KZT",
    "KYD",
    "SGD",
    "SEK",
    "SDG",
    "DOP",
    "DJF",
    "YER",
    "DZD",
    "UYU",
    "LBP",
    "LAK",
    "TWD",
    "TTD",
    "TRY",
    "LKR",
    "TOP",
    "LTL",
    "LRD",
    "LSL",
    "฿",
    "LYD",
    "AED",
    "AFN",
    "ISK",
    "IRR",
    "AMD",
    "ALL",
    "AOA",
    "ARS",
    "AWG",
    "INR",
    "AZN",
    "IDR",
    "UAH",
    "QAR",
    "MZN",];
const currencyNames = ["takas",
    "euros",
    "francos CFA de África Occidental",
    "levas búlgaras",
    "marcos convertibles de Bosnia y Herzegovina",
    "dólares barbadenses",
    "francos CFP",
    "dólares de Bermudas",
    "dólares bruneanos",
    "bolivianos",
    "dinares bahreiníes",
    "francos burundeses",
    "gultrums",
    "dólares jamaicanos",
    "pulas",
    "talas",
    "reales brasileños",
    "dólares bahameños",
    "rublos bielorrusos (2000–2016)",
    "dólares beliceños",
    "rublos rusos",
    "francos ruandeses",
    "dinares serbios",
    "dólares estadounidenses",
    "manat turcomanos",
    "somonis tayikos",
    "lei rumanos",
    "dólares neozelandeses",
    "quetzales guatemaltecos",
    "libras esterlinas",
    "francos CFA de África Central",
    "yenes",
    "dólares guyaneses",
    "laris",
    "francos guineanos",
    "dalasis",
    "libras gibraltareñas",
    "cedis",
    "riales omaníes",
    "dinares tunecinos",
    "dinares jordanos",
    "kunas",
    "gourdes haitianos",
    "forintos húngaros",
    "dólares hongkoneses",
    "lempiras hondureños",
    "dólares australianos",
    "bolívares venezolanos (2008–2018)",
    "coronas noruegas",
    "guaraníes paraguayos",
    "dinares iraquíes",
    "balboas panameños",
    "kinas",
    "soles peruanos",
    "rupias pakistaníes",
    "pesos filipinos",
    "eslotis",
    "kwachas zambianos (1968–2012)",
    "libras egipcias",
    "rands",
    "dongs",
    "dólares salomonenses",
    "bires",
    "chelines somalíes",
    "dólar zimbabuense",
    "riales saudíes",
    "nakfas",
    "lei moldavos",
    "ariaris",
    "dírhams marroquíes",
    "sums",
    "kiats",
    "patacas de Macao",
    "tugriks",
    "dinares macedonios",
    "rupias mauricianas",
    "kuachas malauís",
    "rufiyas",
    "dólares del Caribe Oriental",
    "uguiyas (1973–2017)",
    "chelines ugandeses",
    "chelines tanzanos",
    "ringits",
    "pesos mexicanos",
    "nuevos séqueles israelíes",
    "libras de Santa Elena",
    "dólares fiyianos",
    "libras malvinenses",
    "coronas danesas",
    "córdobas nicaragüenses",
    "dólares namibios",
    "vatus",
    "nairas",
    "rupias nepalíes",
    "francos suizos",
    "pesos colombianos",
    "yuanes",
    "pesos chilenos",
    "dólares canadienses",
    "francos congoleños",
    "coronas checas",
    "colones costarricenses",
    "florines de las Antillas Neerlandesas",
    "escudos de Cabo Verde",
    "pesos cubanos",
    "lilangenis",
    "libras sirias",
    "soms",
    "chelines kenianos",
    "libras sursudanesas",
    "dólares surinameses",
    "rieles",
    "francos comorenses",
    "dobras (1977–2017)",
    "wons surcoreanos",
    "wons norcoreanos",
    "dinares kuwaitíes",
    "leonas",
    "rupias seychellenses",
    "tenges kazakos",
    "dólares de las Islas Caimán",
    "dólares singapurenses",
    "coronas suecas",
    "libras sudanesas",
    "pesos dominicanos",
    "francos yibutianos",
    "riales yemeníes",
    "dinares argelinos",
    "pesos uruguayos",
    "libras libanesas",
    "kips",
    "nuevos dólares taiwaneses",
    "dólares de Trinidad y Tobago",
    "liras turcas",
    "rupias esrilanquesas",
    "paangas",
    "litas lituanas",
    "dólares liberianos",
    "loti lesothense",
    "bats",
    "dinares libios",
    "dírhams de los Emiratos Árabes Unidos",
    "afganis",
    "coronas islandesas",
    "riales iraníes",
    "drams",
    "lekes",
    "kuanzas",
    "pesos argentinos",
    "florines arubeños",
    "rupias indias",
    "manat azerbaiyanos",
    "rupias indonesias",
    "grivnas",
    "riales cataríes",
    "meticales",];