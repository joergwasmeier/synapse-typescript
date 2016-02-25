import SynapseServer from "../../SynapseServer";
import {Collection} from "mongodb";
import {Cursor} from "mongodb";
import {CollectionFindOptions} from "mongodb";
/**
 * Created by creativecode on 27.12.15.
 */

export default class SynapseMongoCollection{

  protected collection:Collection;

  constructor(collectionName:string){
    console.log(SynapseServer.db.dataBase);
    this.collection = SynapseServer.db.dataBase.collection(collectionName);
  }

  find(selector: Object, options?: CollectionFindOptions, callback?: (err: Error, result: Cursor) => void): Cursor{
    return this.collection.find(selector, options, callback);
  }

  insert(query: any, options: { safe?: any; continueOnError?: boolean; keepGoing?: boolean; serializeFunctions?: boolean; }, callback: (err: Error, result: any) => void): void {
    return this.collection.insert(query, options, callback);
  }

  update(selector: Object, document: any, options: { safe?: boolean; upsert?: any; multi?: boolean; serializeFunctions?: boolean; }, callback: (err: Error, result: any) => void): void {
    return this.collection.update(selector, document, options, callback);
  }

}