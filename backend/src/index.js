const express =  require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const requireDir = require('require-dir');

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect('mongodb://localhost:27017/nodeapi', { 
    useUnifiedTopology: true, 
    useNewUrlParser: true
});

requireDir('./models/');

app.use(require('./routes'));

app.listen(3333);