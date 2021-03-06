import WebApplication from "./de/jw/synapse/WebApplication";
import SynapseEvent from './de/jw/synapse/core/SynapseEvent';

import LoginMediator from "./de/js/timekeeper/login/controller/LoginMediator";
import LoginShowEvent from "./de/js/timekeeper/login/controller/event/LoginShowEvent";
import SynapseApiConnection from "./de/jw/synapse/transport/SynapseApiConnection";

import "babel-polyfill";

import * as injectTapEventPlugin from "react-tap-event-plugin";
import UserVo from "./de/js/timekeeper/login/model/vo/UserVo";

class A_Main extends WebApplication {
    constructor() {
        super();

        new UserVo();

        WebApplication.addServerEndPoint(new SynapseApiConnection( "http://localhost:3000/"), "api");

        this.addMediator(new LoginMediator());

        var ev:LoginShowEvent = new LoginShowEvent();
        ev.dispatch();
    }
}

new A_Main();

