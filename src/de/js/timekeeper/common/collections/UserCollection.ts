import SynapseMongoConnection from "../../../../jw/synapse/nodejs/SynapseMongoConnection";
import SynapseMongoCollection from "../../../../jw/synapse/nodejs/SynapseMongoCollection";

import {Collection, Db, Cursor} from "mongodb";
import SynapseServer from "../../../../jw/synapse/SynapseServer";

export default class UserCollection extends SynapseMongoCollection{
    constructor(){
        super("salzig");
    }

    async getUser(userName:string){
        return new Promise<Array<any>>(resolve => {
            console.log("start find: " + userName);
            this.find({username:userName}, {}, (err,result:Cursor) => {
                console.log("end find: " + userName);
                result.toArray((ee,docs)=>{
                    resolve(docs);
                })

            });
        });
    }

    async createtUser(userName:string){
        console.log("createtUser");

        console.log(this.insert);

        this.insert({username:userName}, {}, (err,result) => {
            console.log(err);
            console.log(result);
        });
    }

    async checkLoginData(userName:string, password:string){

    }

}