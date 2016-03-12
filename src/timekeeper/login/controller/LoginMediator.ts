import FabaMediator from "fabalous/dist/core/FabaMediator";
import LoginUserEvent from "./event/LoginUserEvent";
import LoginShowEvent from "./event/LoginShowEvent";


export default class LoginMediator extends FabaMediator {
    constructor(){
        console.log("start");
        super();
    }

    // @ifdef CLIENT
    registerCommands() {
        this.addCommand(LoginShowEvent, LoginCommand);
        this.addCommand(LoginUserEvent, LoginUserCommand);
    }
    // @endif



    registerServices() {
        // this.addCommand(LoginUserEvent, LoginService);
    }

}

// @ifdef CLIENT
import LoginCommand from "./command/LoginCommand";
import LoginUserCommand from"./command/LoginUserCommand";
// @endif

// @ifdef SERVER
//import LoginService from './service/LoginService';
// @endif