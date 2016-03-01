import "babel-polyfill";

import LoginUserEvent from "./timekeeper/login/controller/event/LoginUserEvent";
import UserCollection from "./timekeeper/common/collections/UserCollection";
import UserVo from "./timekeeper/login/model/vo/UserVo";
import LoginMediator from "./timekeeper/login/controller/LoginMediator";
import SynapseServer from "fabalous/src/SynapseServer";
import SynapseMongoConnection from "fabalous/src/nodejs/mongodb/SynapseMongoConnection";

export default class S_Main extends SynapseServer {
   constructor() {
       require('source-map-support').install();

       super();
        // DB Connection

        // Que all Events

        // Start Server

        // Progress Events

        this.addDatabaseConnection(new SynapseMongoConnection("mongodb://localhost:27017/timekeeper"));
        this.addMediator(new LoginMediator());
    }
}

//new S_Main();