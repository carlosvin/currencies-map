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
    const observed = [...new Currencies('name').values()];
    expect(observed).toStrictEqual(currencyNames);
});

test('Load all symbols', () => {
    languageGetter.mockReturnValue('es-ES');
    const observed = [...new Currencies('symbol').values()];
    expect(observed).toStrictEqual(currencySymbols);
});

const currencySymbols = ["฿","₫","€","AED","AFN","ALL","AMD","ANG","AOA","ARS","AUD","AWG","AZN","BAM","BBD","BDT","BGN","BHD","BIF","BMD","BND","BOB","BRL","BSD","BTN","BWP","BYR","BZD","CA$","CDF","CFPF","CHF","CLP","CNY","COP","CRC","CUP","CVE","CZK","DJF","DKK","DOP","DZD","EGP","ERN","ETB","FJD","FKP","GBP","GEL","GHS","GIP","GMD","GNF","GTQ","GYD","HKD","HNL","HRK","HTG","HUF","IDR","ILS","INR","IQD","IRR","ISK","JMD","JOD","JPY","KES","KGS","KHR","KMF","KPW","KRW","KWD","KYD","KZT","LAK","LBP","LKR","LRD","LSL","LTL","LYD","MAD","MDL","MGA","MKD","MMK","MNT","MOP","MRO","MUR","MVR","MWK","MXN","MYR","MZN","NAD","NGN","NIO","NOK","NPR","NZD","OMR","PAB","PEN","PGK","PHP","PKR","PLN","PYG","QAR","RON","RSD","RUB","RWF","SAR","SBD","SCR","SDG","SEK","SGD","SHP","SLL","SOS","SRD","SSP","STD","SYP","SZL","TJS","TMT","TND","TOP","TRY","TTD","TWD","TZS","UAH","UGX","US$","UYU","UZS","VEF","VUV","WST","XAF","XCD","XOF","YER","ZAR","ZMK","ZWL"];

const currencyNames = ["afganis","ariaris","balboas panameños","bats","bires","bolívares venezolanos (2008–2018)","bolivianos","cedis","chelines kenianos","chelines somalíes","chelines tanzanos","chelines ugandeses","colones costarricenses","córdobas nicaragüenses","coronas checas","coronas danesas","coronas islandesas","coronas noruegas","coronas suecas","dalasis","dinares argelinos","dinares bahreiníes","dinares iraquíes","dinares jordanos","dinares kuwaitíes","dinares libios","dinares macedonios","dinares serbios","dinares tunecinos","dírhams de los Emiratos Árabes Unidos","dírhams marroquíes","dobras (1977–2017)","dólar zimbabuense","dólares australianos","dólares bahameños","dólares barbadenses","dólares beliceños","dólares bruneanos","dólares canadienses","dólares de Bermudas","dólares de las Islas Caimán","dólares de Trinidad y Tobago","dólares del Caribe Oriental","dólares estadounidenses","dólares fiyianos","dólares guyaneses","dólares hongkoneses","dólares jamaicanos","dólares liberianos","dólares namibios","dólares neozelandeses","dólares salomonenses","dólares singapurenses","dólares surinameses","dongs","drams","escudos de Cabo Verde","eslotis","euros","florines arubeños","florines de las Antillas Neerlandesas","forintos húngaros","francos burundeses","francos CFA de África Central","francos CFA de África Occidental","francos CFP","francos comorenses","francos congoleños","francos guineanos","francos ruandeses","francos suizos","francos yibutianos","gourdes haitianos","grivnas","guaraníes paraguayos","gultrums","kiats","kinas","kips","kuachas malauís","kuanzas","kunas","kwachas zambianos (1968–2012)","laris","lei moldavos","lei rumanos","lekes","lempiras hondureños","leonas","levas búlgaras","libras de Santa Elena","libras egipcias","libras esterlinas","libras gibraltareñas","libras libanesas","libras malvinenses","libras sirias","libras sudanesas","libras sursudanesas","lilangenis","liras turcas","litas lituanas","loti lesothense","manat azerbaiyanos","manat turcomanos","marcos convertibles de Bosnia y Herzegovina","meticales","nairas","nakfas","nuevos dólares taiwaneses","nuevos séqueles israelíes","paangas","patacas de Macao","pesos argentinos","pesos chilenos","pesos colombianos","pesos cubanos","pesos dominicanos","pesos filipinos","pesos mexicanos","pesos uruguayos","pulas","quetzales guatemaltecos","rands","reales brasileños","riales cataríes","riales iraníes","riales omaníes","riales saudíes","riales yemeníes","rieles","ringits","rublos bielorrusos (2000–2016)","rublos rusos","rufiyas","rupias esrilanquesas","rupias indias","rupias indonesias","rupias mauricianas","rupias nepalíes","rupias pakistaníes","rupias seychellenses","soles peruanos","somonis tayikos","soms","sums","takas","talas","tenges kazakos","tugriks","uguiyas (1973–2017)","vatus","wons norcoreanos","wons surcoreanos","yenes","yuanes"];