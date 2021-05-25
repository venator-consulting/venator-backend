const express = require('express');
const bodyParser = require('body-parser');
const helmet = require('helmet');
const config = require('./config/environment');
const adminRoutes = require('./modules/Admin/route/admin.route.server');
const path = require('path');
require('./config/passport.config');
const bearerToken = require('express-bearer-token');
const sharedRoutes = require('./modules/shared/route/shared.route.server');


// require('./helpers/csv.stream.helper.server').detectDelemeter('./modules/Admin/files/0ade1068d7fee672d55ed779c3fdb370')
// .then(delimiter => {
//     console.log(delimiter);
//     require('./helpers/csv.stream.helper.server').detectQuote('./modules/Admin/files/0ade1068d7fee672d55ed779c3fdb370',
//     delimiter).then(quote => {
//         console.log(quote);
//     }).catch(er=> console.error(er));
// });

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
app.use(bearerToken());

app.use('/api/shared', sharedRoutes);
app.use('/api/admin', adminRoutes);

app.use("/public", express.static(path.join("public")));  

app.use(express.static('front-end/dist/front-end/'));

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'front-end/dist/front-end/index.html'));
});

app.listen(app.get('port'), () => {
    console.log(`the server started at http://localhost:${app.get('port')}/ ...`);
});