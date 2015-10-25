import SynapseCommand = require("../../../../jw/synapse/core/SynapseCommand");
import SynapseEvent = require("../../../../jw/synapse/core/SynapseEvent");
import LoginShowEvent = require("../event/LoginShowEvent");
import Login = require( "../../view/Login");


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

        var login:Login = new Login();
        login.renderToDom();

        event.callBack();
    }
}

export = LoginCommand