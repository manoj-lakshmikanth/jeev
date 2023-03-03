// const express = require('express');
// const app = express();
// const data = require('./data.js');

import express from 'express';
import data from '../backend/data.js';
const app = express();

app.get('/api/products', (req, resp) => {
  resp.send(data.products);
});

app.get('/api/products/slug/:slug', (req, resp) => {
  const product = data.products.find((x) => x.slug === req.params.slug);
  if (product) {
    resp.send(product);
  } else {
    resp.status(404).send({ message: 'Product Not Found' });
  }
});

const port = process.env.PORT || 4500;
app.listen(port, () => {
  console.log(`server at http://localhost:${4500}`);
});
