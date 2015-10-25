import SynapseCommand = require("../../../../jw/synapse/core/SynapseCommand");
import SynapseEvent = require("../../../../jw/synapse/core/SynapseEvent");
import LoginShowEvent = require("../event/LoginShowEvent");


class LoginCommand extends SynapseCommand {
    constructor() {
        super();
    }

    execute(event:SynapseEvent){
        switch(event.name){
            case LoginShowEvent.name: this.loginShow(event);
        }
    }

    private loginShow(event:LoginShowEvent){
        console.log("loginShiw");
        event.callBack();
    }
}

export = LoginCommand