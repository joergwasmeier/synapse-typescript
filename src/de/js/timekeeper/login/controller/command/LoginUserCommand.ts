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
import {trace} from "../../../../../jw/synapse/utils/Logger";

export default class LoginUserCommand extends SynapseCommand {
    execute(event:LoginUserEvent) {
        trace("test dsdsd");

        LoginModel.busy = false;

        this.sendToEndpoint(event);
    }

    result(event:LoginUserEvent){
        LoginModel.name = event.username;
        LoginModel.busy = false;

        trace("result");
    }
}
