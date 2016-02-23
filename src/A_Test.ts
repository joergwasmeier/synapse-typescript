import WebApplication from "./de/jw/synapse/WebApplication";

import LoginMediator from "./de/js/timekeeper/login/controller/LoginMediator";
import LoginShowEvent from "./de/js/timekeeper/login/controller/event/LoginShowEvent";
import SynapseApiConnection from "./de/jw/synapse/transport/SynapseApiConnection";

import "babel-polyfill";
import * as injectTapEventPlugin from "react-tap-event-plugin";

export default class A_Test extends WebApplication {

    public sup:string = "test";

    constructor(test:boolean = true) {

        super();
        this.sup = "tester";

        WebApplication.addServerEndPoint(new SynapseApiConnection( "http://localhost:3000/"), "api");

        this.addMediator(new LoginMediator());
    }
}