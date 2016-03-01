import {Collection, Db, Cursor} from "mongodb";
import UserVo from "../../login/model/vo/UserVo";
import FabaMongoCollection from "fabalous/nodejs/mongodb/FabaMongoCollection";

export default class UserCollection extends FabaMongoCollection{
    constructor(){
        super("users");
    }

    async getUser(userName:string):Promise<Array<UserVo>>{
        return new Promise<Array<UserVo>>(resolve => {
            this.find({username:userName}, {}, (err,result:Cursor) => {

                result.toArray((ee,docs)=>{
                    resolve(docs);
                })

            });
        });
    }

    async createtUser(userName:string){
        //console.log("createtUser");

       // console.log(this.insert);

        var user:UserVo = new UserVo();
        user.username = userName;

        this.insert(user, {serializeFunctions:true}, (err,result) => {
            //console.log(err);
            //console.log(result);
        });
    }

    async checkLoginData(userName:string, password:string):Promise<boolean>{
        return new Promise<boolean>(resolve => {
            if (userName == "test" && password == "test") resolve(true);
            else resolve(false);
        });
    }

}