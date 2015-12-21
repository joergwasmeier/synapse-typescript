import * as injectTapEventPlugin from "react-tap-event-plugin";

import WebApplication from "./de/jw/synapse/WebApplication";
import SynapseEvent from './de/jw/synapse/core/SynapseEvent';

import LoginMediator from "./de/js/timekeeper/login/controller/LoginMediator";
import LoginShowEvent from "./de/js/timekeeper/login/controller/event/LoginShowEvent";

class A_Main extends WebApplication {
    constructor() {
        super();



        this.addMediator(new LoginMediator());

        var ev:LoginShowEvent = new LoginShowEvent();
        ev.callBack = this.cjj;
        ev.dispatch();
    }

    cjj(ev:SynapseEvent){
        //console.log("call");
       // console.log(ev);
    }
}
console.log("dfsfsd");

new A_Main();

