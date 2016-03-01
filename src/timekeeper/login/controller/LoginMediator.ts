import FabaMediator from "fabalous/core/FabaMediator";

import LoginUserEvent from "./event/LoginUserEvent";
import LoginShowEvent from "./event/LoginShowEvent";

// @ifdef CLIENT
import LoginCommand from "./command/LoginCommand";
import LoginUserCommand from"./command/LoginUserCommand";
// @endif

// @ifdef SERVER
import LoginService from './service/LoginService';
// @endif

export default class LoginMediator extends FabaMediator {
    // @ifdef CLIENT
    registerCommands() {
        this.addCommand(LoginShowEvent, LoginCommand);
        this.addCommand(LoginUserEvent, LoginUserCommand);
    }
    // @endif


    // @ifdef SERVER
    registerServices() {
        this.addCommand(LoginUserEvent, LoginService);
    }
    // @endif
}
