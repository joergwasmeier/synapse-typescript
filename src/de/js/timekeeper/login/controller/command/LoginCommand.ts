import LoginShowEvent from "../event/LoginShowEvent";
import Login from  "../../view/Login";

import SynapseCommand from "../../../../../jw/synapse/core/SynapseCommand";
import SynapseEvent from "../../../../../jw/synapse/core/SynapseEvent";
import LoginUserEvent from "../event/LoginUserEvent";
import LoginModel from "../../model/LoginModel";

export default class LoginCommand extends SynapseCommand {
    constructor() {
        super();
    }

    execute(event:SynapseEvent){
        switch(event.name){
            case LoginShowEvent.name:
                this.loginShow(event);
                break;
            case LoginUserEvent.name:
                this.loginUserEvent(<LoginUserEvent> event);
                break;
        }
    }

    private loginShow(event:LoginShowEvent){
        var login:Login = new Login();
        login.renderToDom();

        event.callBack();
    }

    private loginUserEvent(ev:LoginUserEvent){
        LoginModel.name = "testChange";
        LoginModel.busy = true;

        setTimeout(() => {
            console.log("busy changed");

            LoginModel.busy = false;
        }, 3000)

    }
}
