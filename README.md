# Barcode Scanner Input

## in development !

## Features
- add only unique SKUs
- can remove SKU
- edit qty manually
- dump log

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
