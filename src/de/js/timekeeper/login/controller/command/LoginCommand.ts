import LoginShowEvent from "../event/LoginShowEvent";
import Login from  "../../view/Login";

import SynapseCommand from "../../../../../jw/synapse/core/SynapseCommand";
import SynapseEvent from "../../../../../jw/synapse/core/SynapseEvent";
import LoginUserEvent from "../event/LoginUserEvent";
import LoginModel from "../../model/LoginModel";
import UserVo from "../../model/vo/UserVo";
import {ISynapseCommand} from "../../../../../jw/synapse/core/ISynapseCommand";

export default class LoginCommand extends SynapseCommand implements ISynapseCommand {
    execute(event:SynapseEvent) {
        var login:Login = new Login();
        login.renderToDom();
        event.callBack();
    }

    result(event:SynapseEvent) {
    }

    timeout(event:SynapseEvent) {
    }

    error(event:SynapseEvent) {
    }

    offline(event:SynapseEvent) {
    }
}
