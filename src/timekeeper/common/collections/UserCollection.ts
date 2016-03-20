import {Collection, Db, Cursor} from "mongodb";
import FabaMongoCollection from "fabalous/nodejs/mongodb/FabaMongoCollection";
import UserVo from "fabalous-login/model/vo/UserVo";

export default class UserCollection extends FabaMongoCollection{
    constructor(){
        super("users");
    }

    async getUser(userName:string):Promise<Array<UserVo>>{
        return new Promise<Array<any>>(resolve => {
            this.find({username:userName}, {}, (err,result:Cursor) => {
                result.toArray((ee,docs)=>{
                    resolve(docs);
                })

            });
        });
    }

    async createtUser(userName:string){
        return new Promise<boolean>(resolve => {
            var user:UserVo = new UserVo();
            user.username = userName;

            this.insert(user, {serializeFunctions:true}, (err,result) => {
                if (result) resolve(true);
                else resolve(false);
            });
        });
    }

    async checkLoginData(userName:string, password:string):Promise<boolean>{
        return new Promise<boolean>(resolve => {
            if (userName == "test" && password == "test") resolve(true);
            else resolve(false);
        });
    }

}