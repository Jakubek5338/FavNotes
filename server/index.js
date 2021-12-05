const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const authRouter = require('./src/routes/auth');

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.use('/api/user', authRouter);


dotenv.config();

mongoose.connect(process.env.DB_CONNECT, { useNewUrlParser: true, useUnifiedTopology: true});

app.listen(8080, function () {
    console.log('server słucha ');
})