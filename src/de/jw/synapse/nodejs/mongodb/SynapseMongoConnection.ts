import {Db} from "mongodb";
import {MongoClient} from "mongodb";
import {Collection} from "mongodb";
import UserCollection from "../../../../js/timekeeper/common/collections/UserCollection";
import SynapseServer from "../../SynapseServer";
import {trace} from "../../utils/Logger";

export default class SynapseMongoConnection {
  private dbUrl:string;
  dataBase:Db;

  constructor(dbUrl:string) {
    this.dbUrl = dbUrl;
  }

  public connect():void {
    MongoClient.connect(this.dbUrl, (err, conDb) => {
      this.connectHandler(err, conDb)
    });
  }

  private connectHandler(err:any, conDb:Db) {
    if (err) {
      //trace(err);
      //trace("Could not connect to Database");
      setTimeout(() => {
        MongoClient.connect(this.dbUrl, null, (err, conDb) => {
          this.connectHandler(err, conDb)
        });
      }, 1000);
      return;
    }

    this.dataBase = conDb;

    trace("Connect to Database");
  }
}