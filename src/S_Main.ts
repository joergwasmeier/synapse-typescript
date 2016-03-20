import "babel-polyfill";
import "source-map-support/register"

import FabaMongoConnection from "fabalous/nodejs/mongodb/FabaMongoConnection";
import FabaServer from "fabalous/runtimes/FabaServer";
import LoginMediator from "fabalous-login/controller/LoginMediator";
import LoginModel from "fabalous-login/model/LoginModel";
import UserCollection from "./timekeeper/common/collections/UserCollection";

export default class S_Main extends FabaServer {
   constructor() {
       //trace("");
       setTimeout( () => {
           LoginModel.getInstance().userCollection = new UserCollection();
       },700);


       console.log("test");
       super();
        // DB Connection

        // Que all Events

        // Start Server

        // Progress Events

        this.addDatabaseConnection(new FabaMongoConnection("mongodb://localhost:27017/timekeeper"));
        this.addMediator(new LoginMediator());
    }
}

new S_Main();