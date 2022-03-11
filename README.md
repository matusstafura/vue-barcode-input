# Barcode Scanner Input

Reads scanned barcodes for further use (api, db, file, ...)

## in development !

## Demo

To view demo online: // to be added

## Features

- adds only unique SKUs
- can remove SKU
- edit qty manually
- dumps log

## Install

npm i vue-barcode-input

## Usage

Dumps data

```js
<BarcodeInput dump="true"></BarcodeInput>
```

Emits event

```js
<BarcodeInput @products="showData"></BarcodeInput>
```

| Prop | Type    | Default | Description             |
| ---- | ------- | ------- | ----------------------- |
| dump | Boolean | false   | Dumps log of input data |

## Testing (Jest)

```
npm run test:unit
```
