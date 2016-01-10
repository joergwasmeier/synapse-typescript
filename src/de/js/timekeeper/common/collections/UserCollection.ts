import SynapseMongoConnection from "../../../../jw/synapse/nodejs/mongodb/SynapseMongoConnection";
import SynapseMongoCollection from "../../../../jw/synapse/nodejs/mongodb/SynapseMongoCollection";

import {Collection, Db, Cursor} from "mongodb";
import SynapseServer from "../../../../jw/synapse/SynapseServer";
import UserVo from "../../login/model/vo/UserVo";

export default class UserCollection extends SynapseMongoCollection{
    constructor(){
        super("salzig");
    }

    async getUser(userName:string){
        return new Promise<Array<UserVo>>(resolve => {
            this.find({username:userName}, {}, (err,result:Cursor) => {

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