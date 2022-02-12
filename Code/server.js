// const cluster = require('cluster');

// if (cluster.isMaster) {
//   const numWorkers = require('os').cpus().length;

//   console.log('Master cluster setting up ' + numWorkers + ' workers...');

//   for (let i = 0; i < numWorkers; i++) {
//     cluster.fork();
//   }

//   cluster.on('online', function (worker) {
//     console.log('Worker ' + worker.process.pid + ' is online');
//   });

//   cluster.on('exit', function (worker, code, signal) {
//     console.log('Worker ' + worker.process.pid + ' died with code: ' + code + ', and signal: ' + signal);
//     console.log('Starting a new worker');
//     cluster.fork();
//   });
// } else {
  require("express-async-errors");
  const express = require("express");
  const helmet = require("helmet");
  const config = require("./config/environment");
  const adminRoutes = require("./modules/Admin/route/admin.route.server");
  const path = require("path");
  const bearerToken = require("express-bearer-token");
  const sharedRoutes = require("./modules/shared/route/shared.route.server");
  const analysisRoutes = require("./modules/Analysis/route/analysis.route.server");
  const liquidityRoutes = require("./modules/Liquidity/route/liquidity.route.server");
  const websiteRoutes = require("./modules/website/route/website.router");
  const mailHistoryRoutes = require('./modules/MailHistory/route/mails.route.server');
  const Exception = require("./helpers/errorHandlers/Exception");
  const https = require('https');
  // for reading certificates
  const fs = require('fs');
  // for deployment
  // const key = fs.readFileSync('./ssl/server.key');
  // const cert = fs.readFileSync('./ssl/server.cer');
  // for local
  const key = fs.readFileSync('./ssl/key.pem');
  const cert = fs.readFileSync('./ssl/cert.pem');


  const cors = require("cors");

  require("./config/passport.config");
  const app = express();
  app.use(helmet());
  // // delete next middleware before deployment!!!!!!!!!!!!!!!!
  app.use(cors({ origin: "*" }));

  app.set("port", config.port);

  app.use(express.json());
  app.use(
    express.urlencoded({
      extended: true,
    })
  );
  app.use(bearerToken());

  // just a work around for sse
  app.use(function (req, res, next) {
    res.flush = function () { /* Do nothing */ }
    next();
  });

  app.get('/test', (req, res) => { res.json('this is an secure server') });

  app.use("/api/shared", sharedRoutes);
  app.use("/api/admin", adminRoutes);
  app.use("/api/analysis", analysisRoutes);
  app.use("/api/liquidity", liquidityRoutes);
  app.use("/api/mail-history", mailHistoryRoutes);
  app.use("/api/website", websiteRoutes);
  app.use(Exception.requestDefaultHandler);

  app.use("/public", express.static(path.join("public")));

  app.use(express.static("front-end/dist/front-end/"));


  // app.get("*", (req, res) => {
  //   res.sendFile(path.join(__dirname, "front-end/dist/front-end/index.html"));
  // });

  // app.listen(app.get("port"), () => {
  //   console.log(`the server started at http://localhost:${app.get("port")}/ ...`);
  // });

  const server = https.createServer({ key: key, cert: cert }, app);

  server.listen(config.port, () => { console.log(`listening on ${config.port}`) });
// }