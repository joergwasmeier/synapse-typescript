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

class S_Main extends SynapseServer {
    constructor() {
        require('source-map-support').install();

        trace("Go");
        //trace(new UserVo);

        //trace(this['UserVo']);

        super();

        this.addMediator(new LoginMediator());
        this.addDatabaseConnection(new SynapseMongoConnection("mongodb://localhost:27017/timekeeper"));


    }
}

new S_Main();


var foo = "some stuff";
