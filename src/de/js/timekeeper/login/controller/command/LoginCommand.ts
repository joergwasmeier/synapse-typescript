import LoginShowEvent from "../event/LoginShowEvent";
import Login from  "../../view/Login";

import SynapseCommand from "../../../../../jw/synapse/core/SynapseCommand";
import SynapseEvent from "../../../../../jw/synapse/core/SynapseEvent";
import LoginUserEvent from "../event/LoginUserEvent";
import LoginModel from "../../model/LoginModel";
import UserVo from "../../model/vo/UserVo";

export default class LoginCommand extends SynapseCommand {
    constructor() {
        super();
    }

    execute(event:SynapseEvent) {
        switch (event.getClassName()) {
            case LoginShowEvent.name:
                this.loginShow(event);
                break;
            case LoginUserEvent.name:
                this.loginUserEvent(<LoginUserEvent> event);
                break;
        }
    }

    serverMsgHandler(event:SynapseEvent){
        switch (event.getClassName()) {

        }
    }

    private loginShow(event:LoginShowEvent) {
        var login:Login = new Login();
        login.renderToDom();
        event.callBack();
    }

    private async loginUserEvent(ev:LoginUserEvent) {
        let result = "";

        // Check data local

        LoginModel.busy = true;
        // Send event to server and recive promise
       // await this.sendToServer(ev).then((stuff) => {
       //     result = stuff;
        //});

        LoginModel.name = result;
        LoginModel.busy = false;

        var user:UserVo = new UserVo();
        user.password = ev.password;
        user.username = ev.username;

        ev.callBack();
    }

    private completeHandler(ev) {
        console.log(ev.target.response);

        LoginModel.busy = false;
    }
}
