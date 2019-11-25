# Currencies Map
Currency codes mapping to currency names and symbols using native javascript API to get local currency names and symbols.

[![alt text](https://badgen.net/bundlephobia/minzip/currencies-map "Bundle size")](https://bundlephobia.com/result?p=currencies-map)

It contains type declarations for Typescript.

It uses `navigator.language` to show the correct currency symbol or name.

## Example: Currency code `USD`
If your device language is `es-ES` you will get:
- Currency name: `dólares estadounidenses`
- Currency symbol: `US$`

If your device language is `en-GB` you will get:
- Currency name: `US dollars`
- Currency symbol: `US$`

# Install
```bash
yarn add currencies-map
```
or
```bash
npm install currencies-map
```

# Using it
```javascript
import currencyNames from 'currencies-map/names';
import currencySymbols from 'currencies-map/symbols';
```

## Getting currency name
```javascript
const currencyCode = 'EUR';
console.info(currencyCode + ': ' + currencyNames.get(currencyCode));
```
Output (device language es-ES)
```javascript
"EUR: euros"
```

## Getting currency symbol
```javascript
const currencyCode = 'EUR';
console.info(currencyCode + ': ' + currencySymbols.get(currencyCode));
```
Output
```javascript
"EUR: €"
```

## List all names
```javascript
console.info([...currenciesNames.values()]);
```
Output (device language es-ES)
```javascript
["euros", "dólares estadounidenses", "kiats" ...]
```

## List all symbols
```javascript
console.info([...currenciesSymbols.values()]);
```
Output
```javascript
["€", "US$", "MMK" ...]
```
When the currency doesn't have symbol it will show currency code.

## List all currency codes
```javascript
import {codes} from 'currencies-map/codes';
console.info(codes);
```
Output
```javascript
["EUR", "USD", "MMK" ...]
```
