import SynapseMediator from "../../../../jw/synapse/core/SynapseMediator";

import LoginUserEvent from "./event/LoginUserEvent";
import LoginShowEvent from "./event/LoginShowEvent";

// @ifdef CLIENT
import LoginCommand from "./command/LoginCommand";
import LoginUserCommand from"./command/LoginUserCommand";
// @endif

// @ifdef SERVER
import LoginService from './service/LoginService';
// @endif

declare var module:any;

export default class LoginMediator extends SynapseMediator {

    test(){
        console.log("dsdfdsfdsf ");
    }

    // @ifdef CLIENT
    registerCommands() {
       // module.hot.accept("./command/LoginUserCommand", () => {
       //     this.updateCommand(LoginUserEvent,  require("./command/LoginUserCommand").default);
      //  });

        this.addCommand(LoginShowEvent, LoginCommand);
        this.addCommand(LoginUserEvent, LoginUserCommand);
    }
    // @endif


    // @ifdef SERVER
    registerServices() {
      //  module.hot.accept("./service/LoginService.ts", () => {
       //     this.updateCommand(LoginUserEvent,  require("./service/LoginService.ts").default);
      //  });

        this.addCommand(LoginUserEvent, LoginService);
    }

    // @endif
}
