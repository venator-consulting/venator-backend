const express = require('express');
const bodyParser = require('body-parser');
const helmet = require('helmet');
const config = require('./config/environment');

const cors = require('cors');
const app = express();
app.use(helmet());
// // delete next middleware before deployment!!!!!!!!!!!!!!!!
app.use(cors({ origin: '*' }));

app.set('port', config.port);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

app.get('*', (req, res) => {
    res.json("Hello world");
});

app.listen(app.get('port'), () => {
    console.log(`the server started at http://localhost:${app.get('port')}/ ...`);
});