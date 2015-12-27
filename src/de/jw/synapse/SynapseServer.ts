import SynapseApplication from "./core/SynapseApplication";
import {Db} from "mongodb";
import SynapseMongoConnection from "./nodejs/SynapseMongoConnection";
/**
 * Created by creativecode on 27.12.15.
 */

export default class SynapseServer extends SynapseApplication{
  static db:SynapseMongoConnection;

  express = require('express');
  app;

  assign = require('object.assign').getPolyfill();

  constructor(){
    super();

    this.app = this.express();
    this.startServer();
  }

  addDatabaseConnection(db:SynapseMongoConnection){
    SynapseServer.db = db;
    SynapseServer.db.connect();

  }

  private startServer(){
    this.app.use(this.rawBody);

    this.app.all('/api/', function(req, res, next) {
      res.header("Access-Control-Allow-Origin", "*");
      res.header("Access-Control-Allow-Headers", "X-Requested-With");
      next();
    });

    this.app.post('/api/', (req, res) => {
      let body = JSON.parse(req.rawBody);
      let currentEvent = new SynapseApplication.events[body.identifyer]



      var h:any = this.assign(currentEvent, JSON.parse(req.rawBody));
      console.log(h);
      console.log(h.test());

      h.dispatch((event) => {
        res.send(JSON.stringify(event));
      });
    });

    this.app.listen(3000);
  }

  private rawBody(req, res, next) {
    req.setEncoding('utf8');
    req.rawBody = '';
    req.on('data', function(chunk) {
      req.rawBody += chunk;
    });
    req.on('end', function(){
      next();
    });
  }

}