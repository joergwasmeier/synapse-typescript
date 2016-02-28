/**
 * Created by creativecode on 27.12.15.
 */

import {trace} from "./utils/Logger";
import {Db} from "mongodb";

import SynapseApplication from "./core/SynapseApplication";
import SynapseMongoConnection from "./nodejs/mongodb/SynapseMongoConnection";
import SynapseValueObject from "./core/SynapseValueObject";


export default class SynapseServer extends SynapseApplication{
  static db:SynapseMongoConnection;

  koa = require('koa');

  express = require('express');
  app;

  assign = require('object.assign').getPolyfill();

  constructor(){
    super();

    this.app = this.koa();
    this.startServer();
  }

  addDatabaseConnection(db:SynapseMongoConnection){
    SynapseServer.db = db;
    SynapseServer.db.connect();
  }

  parseObject(obj){
    for (var key in obj) {
      if (obj[key] != null && obj[key].className != null){
        let vo:SynapseValueObject = obj[key];
        try {

          let neVoInst:any = new SynapseApplication.vos[vo.className];
          obj[key] = this.assign(neVoInst, vo);

          obj[key] = this.parseObject(obj[key]);

        } catch(e){
          throw e;
        }
      }
    }


    return obj;
  }



  private startServer(){
    this.app.use(function *test(){
      this.body = 'Hello World';
    });

    /*
    this.app.all('/api/', function(req:any, res:any, next) {
      res.header("Access-Control-Allow-Origin", "*");
      res.header("Access-Control-Allow-Headers", "X-Requested-With");
      next();
    });

    this.app.post('/api/', (req, res) => {
      let body = JSON.parse(req.rawBody);
      let currentEvent = new SynapseApplication.events[body.identifyer];

      var h:any = this.assign(currentEvent, JSON.parse(req.rawBody));
      h = this.parseObject(h);

      h.dispatch((event) => {
        res.send(JSON.stringify(event));
      });
    });
    */
   // this.app.listen(4001);
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

  private rawData(req, res, next) {
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