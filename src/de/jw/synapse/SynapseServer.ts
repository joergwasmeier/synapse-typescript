import SynapseApplication from "./core/SynapseApplication";
import {Db} from "mongodb";
import SynapseMongoConnection from "./nodejs/mongodb/SynapseMongoConnection";
import {trace} from "./utils/Logger";
import UserVo from "../../js/timekeeper/login/model/vo/UserVo";
import UserVo from "../../js/timekeeper/login/model/vo/UserVo";
import SynapseValueObject from "./core/SynapseValueObject";
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

  parseObject(obj){
    for (var key in obj) {
      if (obj[key] != null && obj[key].className != null){
        let vo:SynapseValueObject = obj[key];
        //trace("VO FOUND! : " + vo);
        try {

          let neVoInst = new SynapseApplication.vos[vo.className];
          obj[key] = this.assign(neVoInst, vo);

          obj[key] = this.parseObject(obj[key]);

        } catch(e:Error){
          throw e;
          //trace("VO not Registered");
        }
      }
    }


    return obj;
  }

  private startServer(){
    this.app.use(this.rawBody);

    this.app.all('/api/', function(req, res, next) {
      res.header("Access-Control-Allow-Origin", "*");
      res.header("Access-Control-Allow-Headers", "X-Requested-With");
      next();
    });

    this.app.post('/api/', (req, res) => {

      var msgpack = require("msgpack-lite");
//      var buffer = msgpack.decode(req.data);

  //    trace(buffer);
      let body = JSON.parse(req.rawBody);
      let currentEvent = new SynapseApplication.events[body.identifyer];

      var h:any = this.assign(currentEvent, JSON.parse(req.rawBody));
      h = this.parseObject(h);



      //var k:UserVo = this.assign(new UserVo(), h.user);
      trace(h.user.validate());
      trace(h.test());

      trace(h);

      trace(h.user.address.fullAdress());
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