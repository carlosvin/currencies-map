# Currencies Map
Currency codes mapping to currency names and symbols using native javascript API to get local currency names and symbols.

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
import {Currencies} from 'currencies-map';
```

## Getting currency name
```javascript
const currencies = new Currencies('name');
const currencyCode = 'EUR';
console.info(currencyCode + ': ' + currencies.getName(currencyCode));
```
Output (device language es-ES)
```javascript
"EUR: euros"
```

## Getting currency symbol
```javascript
const currencies = new Currencies('symbol');
const currencyCode = 'EUR';
console.info(currencyCode + ': ' + currencies.getName(currencyCode));
```
Output
```javascript
"EUR: €"
```

## List all names
```javascript
const currencies = new Currencies('name');
console.info(currencies.names);
```
Output (device language es-ES)
```javascript
["euros", "dólares estadounidenses", "kiats" ...]
```

## List all symbols
```javascript
const currencies = new Currencies('symbol');
console.info(currencies.names);
```
Output
```javascript
["€", "US$", "MMK" ...]
```
When the currency doesn't have symbol it will show currency code.

## List all currency codes
```javascript
console.info(Currencies.codes);
```

