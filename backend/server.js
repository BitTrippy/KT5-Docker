const express = require("express");
const cors = require("cors");
const app = express();
const port = 3000;

app.use(cors());

// Yksinkertainen ostoskori muutamalla tuotteella
const shoppingCart = [
  {
    id: 1,
    product: "Book",
    price: 20.5,
  },
  {
    id: 2,
    product: "Pen",
    price: 0.25,
  },
  {
    id: 3,
    product: "Ruler",
    price: 0.3,
  },
  {
    id: 4,
    product: "Notebook",
    price: 9.99,
  },
  {
    id: 5,
    product: "Eraser",
    price: 0.5,
  },
];

// Palautetaan ostoskorin sisältä
app.get("/list", (req, res) => {
  res.send(shoppingCart);
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
