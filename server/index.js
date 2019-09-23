const express = require("express");
const app = express();
const port = 8080;
const path = require("path");
const pdfMakePrinter = require("pdfmake");

var fontDescriptors = {
  Roboto: {
    normal: path.join(__dirname, "/fonts/Roboto-Regular.ttf"),
    bold: path.join(__dirname, "..", "examples", "/fonts/Roboto-Medium.ttf"),
    italics: path.join(__dirname, "/fonts/Roboto-Italic.ttf"),
    bolditalics: path.join(__dirname, "/fonts/Roboto-MediumItalic.ttf"),
  },
};

app.get("/", (req, res) => res.send("Hello World!"));

var dd = {
  content: [
    "First paragraph",
    "Another paragraph, this time a little bit longer to make sure, this line will be divided into at least two lines",
  ],
};

const pdfController = async (req, res, next) => {
  var printer = new pdfMakePrinter(fontDescriptors);

  var doc = printer.createPdfKitDocument(dd);

  doc.end();

  res.setHeader("Content-type", "application/pdf");
  res.setHeader("Content-disposition", 'inline; filename="Example.pdf"');

  doc.pipe(res);
};

app.get("/pdf", pdfController);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
