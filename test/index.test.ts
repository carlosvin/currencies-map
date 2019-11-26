import { Currencies } from '../src/index';

let languageGetter: any;

beforeEach(() => {
    languageGetter = jest.spyOn(window.navigator, 'languages', 'get');
    languageGetter.mockReturnValue(['es-ES']);    
})

test('Load names singleton', async () => {
    expect(Currencies.names.get('THB')).toStrictEqual('Thai baht');
});

test('Load symbols singleton', async () => {
    expect(Currencies.symbols.get('EUR')).toStrictEqual('€');
});

test('Euro symbol en-GB', () => {
    languageGetter.mockReturnValue();
    const cs = new Currencies('symbol', ['es-ES']);
    expect(cs.get('EUR')).toStrictEqual('€');
});

test('Myanmar kyats name es-ES', () => {
    const cs = new Currencies('name', ['es-ES']);
    expect(cs.get('MMK')).toStrictEqual('kiats');
});

test('Myanmar kyats name en-US', () => {
    const cs = new Currencies('name', ['en-US']);
    expect(cs.get('MMK')).toStrictEqual('Myanmar kyats');
});

test('USD name and symbol es-ES', () => {
    expect(new Currencies('name', ['es-ES']).get('USD')).toStrictEqual('dólares estadounidenses');
    expect(new Currencies('symbol', ['es-ES']).get('USD')).toStrictEqual('US$');
});

test('ARS name and symbol es-AR', () => {
    expect(new Currencies('name', ['es-AR']).get('ARS')).toStrictEqual('pesos argentinos');
    expect(new Currencies('symbol', ['es-AR']).get('ARS')).toStrictEqual('$');
});

test('Load all names', () => {
    const observed = [...new Currencies('name', ['es-ES']).values()];
    expect(observed).toStrictEqual(currencyNames);
});

test('Load all symbols', () => {
    const observed = [...new Currencies('symbol', ['es-ES']).values()];
    expect(observed).toStrictEqual(currencySymbols);
});

const currencySymbols = ["฿","₫","€","AED","AFN","ALL","AMD","ANG","AOA","ARS","AUD","AWG","AZN","BAM","BBD","BDT","BGN","BHD","BIF","BMD","BND","BOB","BRL","BSD","BTN","BWP","BYR","BZD","CA$","CDF","CFPF","CHF","CLP","CNY","COP","CRC","CUP","CVE","CZK","DJF","DKK","DOP","DZD","EGP","ERN","ETB","FJD","FKP","GBP","GEL","GHS","GIP","GMD","GNF","GTQ","GYD","HKD","HNL","HRK","HTG","HUF","IDR","ILS","INR","IQD","IRR","ISK","JMD","JOD","JPY","KES","KGS","KHR","KMF","KPW","KRW","KWD","KYD","KZT","LAK","LBP","LKR","LRD","LSL","LTL","LYD","MAD","MDL","MGA","MKD","MMK","MNT","MOP","MRO","MUR","MVR","MWK","MXN","MYR","MZN","NAD","NGN","NIO","NOK","NPR","NZD","OMR","PAB","PEN","PGK","PHP","PKR","PLN","PYG","QAR","RON","RSD","RUB","RWF","SAR","SBD","SCR","SDG","SEK","SGD","SHP","SLL","SOS","SRD","SSP","STD","SYP","SZL","TJS","TMT","TND","TOP","TRY","TTD","TWD","TZS","UAH","UGX","US$","UYU","UZS","VEF","VUV","WST","XAF","XCD","XOF","YER","ZAR","ZMK","ZWL"];

const currencyNames = ["afganis","ariaris","balboas panameños","bats","bires","bolívares venezolanos (2008–2018)","bolivianos","cedis","chelines kenianos","chelines somalíes","chelines tanzanos","chelines ugandeses","colones costarricenses","córdobas nicaragüenses","coronas checas","coronas danesas","coronas islandesas","coronas noruegas","coronas suecas","dalasis","dinares argelinos","dinares bahreiníes","dinares iraquíes","dinares jordanos","dinares kuwaitíes","dinares libios","dinares macedonios","dinares serbios","dinares tunecinos","dírhams de los Emiratos Árabes Unidos","dírhams marroquíes","dobras (1977–2017)","dólar zimbabuense","dólares australianos","dólares bahameños","dólares barbadenses","dólares beliceños","dólares bruneanos","dólares canadienses","dólares de Bermudas","dólares de las Islas Caimán","dólares de Trinidad y Tobago","dólares del Caribe Oriental","dólares estadounidenses","dólares fiyianos","dólares guyaneses","dólares hongkoneses","dólares jamaicanos","dólares liberianos","dólares namibios","dólares neozelandeses","dólares salomonenses","dólares singapurenses","dólares surinameses","dongs","drams","escudos de Cabo Verde","eslotis","euros","florines arubeños","florines de las Antillas Neerlandesas","forintos húngaros","francos burundeses","francos CFA de África Central","francos CFA de África Occidental","francos CFP","francos comorenses","francos congoleños","francos guineanos","francos ruandeses","francos suizos","francos yibutianos","gourdes haitianos","grivnas","guaraníes paraguayos","gultrums","kiats","kinas","kips","kuachas malauís","kuanzas","kunas","kwachas zambianos (1968–2012)","laris","lei moldavos","lei rumanos","lekes","lempiras hondureños","leonas","levas búlgaras","libras de Santa Elena","libras egipcias","libras esterlinas","libras gibraltareñas","libras libanesas","libras malvinenses","libras sirias","libras sudanesas","libras sursudanesas","lilangenis","liras turcas","litas lituanas","loti lesothense","manat azerbaiyanos","manat turcomanos","marcos convertibles de Bosnia y Herzegovina","meticales","nairas","nakfas","nuevos dólares taiwaneses","nuevos séqueles israelíes","paangas","patacas de Macao","pesos argentinos","pesos chilenos","pesos colombianos","pesos cubanos","pesos dominicanos","pesos filipinos","pesos mexicanos","pesos uruguayos","pulas","quetzales guatemaltecos","rands","reales brasileños","riales cataríes","riales iraníes","riales omaníes","riales saudíes","riales yemeníes","rieles","ringits","rublos bielorrusos (2000–2016)","rublos rusos","rufiyas","rupias esrilanquesas","rupias indias","rupias indonesias","rupias mauricianas","rupias nepalíes","rupias pakistaníes","rupias seychellenses","soles peruanos","somonis tayikos","soms","sums","takas","talas","tenges kazakos","tugriks","uguiyas (1973–2017)","vatus","wons norcoreanos","wons surcoreanos","yenes","yuanes"];