import Login from "../../view/Login";
import LoginShowEvent from "../event/LoginShowEvent";
import FabaCommand from "fabalous/dist/core/FabaCommand";

export default class LoginCommand extends FabaCommand {
    execute(event:LoginShowEvent) {
        //var login:Login = new Login();

        //login.renderToDom(event.target);
        //event.callBack();

    }

    result(event:LoginShowEvent) {
    }

    timeout(event:LoginShowEvent) {
    }

    error(event:LoginShowEvent) {
    }

    offline(event:LoginShowEvent) {
    }
}
