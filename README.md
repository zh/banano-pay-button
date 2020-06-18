Easy to implement Banano currency payments via QR code

## Description

The code allows adding Banano currency payments to any Web page by **including a single JavaScript file** and configuring the `<div>` container to host the button and the resulting QR code.

## Usage

```html
<body>
  <div
      id="banano-button"
      data-title="Donate 10 BAN"
      data-address="ban_1mcjisg83r4tuy811i8j33pwdo86c1xrma1on4zc9jb8az6q1qow1xz33qar"
      data-amount="10"
      data-info="yes"
      data-label="fund"
      data-qr-size="128"
      data-qr-level="M"
      data-qr-fg="#000090"
      data-qr-bg="#FFFFFF"
    ></div>
  <script src="banano_button.min.js"></script>
</body>
```

## Container data options

All `data-` parameters are send to the underlaying React component. They are divided in two categories:

* **Banano URI** generation parameters:
  * `data-title` - Text to be displayed on the button. *Optional*. *Default*: 'Pay with BAN'
  * `data-address` - Banano address to send the payment. *Required*
  * `data-amount` - Amount of Banano tokens. *Optional*
  * `data-label` - Label for easy payment identification. *Optional*
  * `data-info` - Add text information (address, amount and label) after the QR code. *Optional*
* **QR Code** configuration - all *data-qr-* parameters are optional:
  * `data-qr-size` - QR code size. *Default:* 128
  * `data-qr-level` - Error correction level. *Default:* 'M'
  * `data-qr-fg` - QR code foreground. *Default:* '#000000'
  * `data-qr-bg` - QR code background. *Default:* '#FFFFFF'

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.

Open [http://localhost:8080](http://localhost:8080) to view it in the browser.

The page will reload if you make edits.

### `yarn build`

Builds the app for production to the `public` folder.
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and your app is ready to be deployed!

*public/* directory contains all necessary files (*JavaScript* and *HTML*) so starting any web server (like for example *armor*) in that directory will allow examination of the result.