import Login from "../../view/Login";

import LoginShowEvent from "../event/LoginShowEvent";
import LoginUserEvent from "../event/LoginUserEvent";
import LoginModel from "../../model/LoginModel";
import UserVo from "../../model/vo/UserVo";

import FabaCommand from "fabalous/core/FabaCommand";
import FabaEvent from "fabalous/core/FabaEvent";
import FabaWebApplication from "fabalous/FabaWebApplication";

export default class LoginCommand extends FabaCommand {
    execute(event:LoginShowEvent) {
        var login:Login = new Login();

        console.log(FabaWebApplication.servers);

        login.renderToDom(event.target);
        event.callBack();


    }

    result(event:FabaEvent) {
    }

    timeout(event:FabaEvent) {
    }

    error(event:FabaEvent) {
    }

    offline(event:FabaEvent) {
    }
}
