import "babel-polyfill";

import WebApplication from "./de/jw/synapse/WebApplication";
import LoginMediator from "./de/js/timekeeper/login/controller/LoginMediator";
import LoginUserEvent from "./de/js/timekeeper/login/controller/event/LoginUserEvent";
import SynapseEvent from "./de/jw/synapse/core/SynapseEvent";
import SynapseServer from "./de/jw/synapse/SynapseServer";
import SynapseMongoConnection from "./de/jw/synapse/nodejs/SynapseMongoConnection";
import UserCollection from "./de/js/timekeeper/common/collections/UserCollection";

require('source-map-support').install();

class S_Main extends SynapseServer {
    constructor() {
        super();

        this.addMediator(new LoginMediator());
        this.addDatabaseConnection(new SynapseMongoConnection("mongodb://localhost:27017/timekeeper"));
    }
}

new S_Main();