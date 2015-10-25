import WebApplication = require("./de/jw/synapse/WebApplication");
import LoginRouter = require("./de/js/login/controller/LoginRouter");
import LoginUserEvent = require("./de/js/login/controller/event/LoginUserEvent");
import LoginShowEvent = require("./de/js/login/controller/event/LoginShowEvent");
import SynapseEvent = require("./de/jw/synapse/core/SynapseEvent");

class A_Main extends WebApplication {
    constructor() {
        super();

        this.addRouter(new LoginRouter());

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
