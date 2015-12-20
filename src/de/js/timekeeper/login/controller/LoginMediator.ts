import LoginUserEvent from "./event/LoginUserEvent";
import LoginCommand from "./command/LoginCommand";

import LoginShowEvent from "./event/LoginShowEvent";
import SynapseMediator from "../../../../jw/synapse/core/SynapseMediator";

// @ifdef SERVER
import LoginService from './service/LoginService';
// @endif

export default class LoginMediator extends SynapseMediator {
  constructor() {
    super();

    this.addCommand(LoginShowEvent, LoginCommand);
    this.addCommand(LoginUserEvent, LoginCommand);

    // @ifdef SERVER
    this.addSerivce(LoginUserEvent, LoginService);
    console.log("NODE");
    // @endif

    // @ifdef CLIENT
    console.log("CLIENT");
    // @endif

  }
}
