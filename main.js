const express = require('express');
const { mongoose } = require('mongoose');

const settings = require('./settings');

mongoose.connect(settings.base);

const app = express();

//Временная заглушка

app.get('/main/news', (req, res) => res.end('Ok'));
app.use((req, res) => res.redirect('/main/news'));

app.listen(80);