import "babel-polyfill";

import WebApplication from "./de/jw/synapse/WebApplication";
import LoginMediator from "./de/js/timekeeper/login/controller/LoginMediator";
import LoginUserEvent from "./de/js/timekeeper/login/controller/event/LoginUserEvent";
import SynapseEvent from "./de/jw/synapse/core/SynapseEvent";
import SynapseServer from "./de/jw/synapse/SynapseServer";
import SynapseMongoConnection from "./de/jw/synapse/nodejs/mongodb/SynapseMongoConnection";
import UserCollection from "./de/js/timekeeper/common/collections/UserCollection";
import {trace} from "./de/jw/synapse/utils/Logger";
import UserVo from "./de/js/timekeeper/login/model/vo/UserVo";

export default class S_Main extends SynapseServer {
   async constructor() {
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