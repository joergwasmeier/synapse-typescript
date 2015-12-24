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

    execute(event:SynapseEvent){
        switch(event.getClassName()){
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

        var user:UserVo = new UserVo();
        user.password = ev.password;
        user.username = ev.username;

        var nRequest:XMLHttpRequest = new XMLHttpRequest();
        nRequest.addEventListener("load", this.completeHandler, false);
        nRequest.open("POST", "http://localhost:3000/api/", true);
        nRequest.setRequestHeader('Content-Type', 'text/plain');
        nRequest.send("test");

        setTimeout(() => {
            console.log("busy changed");

            LoginModel.userData = user;
            LoginModel.busy = false;
        }, 3000)
    }

    private completeHandler(ev) {
        console.log(ev);
    }
}
