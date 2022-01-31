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
    expect(observed).toMatchSnapshot();
});

test('Load all symbols', () => {
    const observed = [...new Currencies('symbol', ['es-ES']).values()];
    expect(observed).toMatchSnapshot();
});

test('Load defaults', () => {
    const observed = Currencies.names.loadDefaults([['YYY', 'YYY value']]);
    expect(observed.get('YYY')).toBe('YYY value');
    expect(observed.get('EUR')).toBe('euros');
});
