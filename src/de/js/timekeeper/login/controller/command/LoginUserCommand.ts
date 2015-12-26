/**
 * Created by creativecode on 25.12.15.
 */
import LoginShowEvent from "../event/LoginShowEvent";
import Login from  "../../view/Login";

import SynapseCommand from "../../../../../jw/synapse/core/SynapseCommand";
import SynapseEvent from "../../../../../jw/synapse/core/SynapseEvent";
import LoginUserEvent from "../event/LoginUserEvent";
import LoginModel from "../../model/LoginModel";
import UserVo from "../../model/vo/UserVo";

export default class LoginUserCommand extends SynapseCommand {

    execute(event:LoginUserEvent) {
        // Check data local
        LoginModel.busy = true;
        event.user.validate();
        console.log(event.user.validate());

        this.sendToEndpoint(event);
    }

    result(event:LoginUserEvent){
        LoginModel.name = event.username;
        LoginModel.busy = false;

        console.log("result");
        //console.log(event.user.validate());
    }
}
