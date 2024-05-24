# Level Money

This is an Electron-based application that is loosely based on Kaikabo and built to make saving money simple and easy.

Disclaimer: Level Money is not financial advice or any science-backed way of saving money. It is just something that I use and want to share with others.

This application is still in active development and missing many essential features, such as adding a spending limit and auto-clearing monthly transactions. Below are some of the workarounds for these missing features.
Spend Limit

To add a spending limit, just create a .env file and include the following lines in the file:

```
REACT_APP_SPEND_INCOME = 750
REACT_APP_SPECIAL = 2000
```

Clearing monthly transactions

Currently, this is mapped to Shift + Meta on the monthly section (either Windows key or command key based on the operating system).
Building the Application

After installing the needed files npm i -S, you can create a development build using npm electron:dev or build your own using npm run build to build the react files and npm run electron:build to build the application to the /dist folder.
