import SynapseCommand from "../../../../jw/synapse/core/SynapseCommand";
import SynapseEvent from "../../../../jw/synapse/core/SynapseEvent";
import LoginShowEvent from "../event/LoginShowEvent";
import Login from  "../../view/Login";

export default class LoginCommand extends SynapseCommand {
    constructor() {
        super();
    }

    execute(event:SynapseEvent){
        switch(event.name){
            case LoginShowEvent.name: this.loginShow(event);
        }
    }

    private loginShow(event:LoginShowEvent){
        var login:Login = new Login();
        login.renderToDom();

        event.callBack();
    }
}
