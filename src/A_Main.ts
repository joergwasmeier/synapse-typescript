import WebApplication = require("./de/jw/synapse/WebApplication");
import LoginMediator = require("./de/js/login/controller/LoginMediator");
import LoginUserEvent = require("./de/js/login/controller/event/LoginUserEvent");
import LoginShowEvent = require("./de/js/login/controller/event/LoginShowEvent");
import SynapseEvent = require("./de/jw/synapse/core/SynapseEvent");

import injectTapEventPlugin = require("react-tap-event-plugin");


class A_Main extends WebApplication {
    constructor() {
        super();
        injectTapEventPlugin();

        this.addRouter(new LoginMediator());

        var ev:LoginShowEvent = new LoginShowEvent();
        ev.callBack = this.cjj;
        ev.dispatch();
        //super.dispatchEvent();
    }

    cjj(ev:SynapseEvent){
        console.log("call");
    }
}

new A_Main();
