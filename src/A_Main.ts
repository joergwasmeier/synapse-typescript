import WebApplication from "./de/jw/synapse/WebApplication";
import LoginMediator from "./de/js/login/controller/LoginMediator";
import LoginUserEvent from "./de/js/login/controller/event/LoginUserEvent";
import LoginShowEvent from "./de/js/login/controller/event/LoginShowEvent";

import SynapseEvent from './de/jw/synapse/core/SynapseEvent';
import * as injectTapEventPlugin from "react-tap-event-plugin";

class A_Main extends WebApplication {
    constructor() {
        super();

        this.addMediator(new LoginMediator());

        var ev:LoginShowEvent = new LoginShowEvent();       
        ev.callBack = this.cjj;
        ev.dispatch();
    }

    cjj(ev:SynapseEvent){
        console.log("call");
    }
}

new A_Main();
