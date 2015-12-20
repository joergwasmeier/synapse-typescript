import SynapseMediator from "../../../../jw/synapse/core/SynapseMediator";

import LoginUserEvent from "./event/LoginUserEvent";
import LoginShowEvent from "./event/LoginShowEvent";

// @ifdef CLIENT
import LoginCommand from "./command/LoginCommand";
// @endif

// @ifdef SERVER
import LoginService from './service/LoginService';
// @endif

export default class LoginMediator extends SynapseMediator {
  constructor() {
    super();
  }

  // @ifdef CLIENT
  registerCommands(){
    this.addCommand(LoginShowEvent, LoginCommand);
    this.addCommand(LoginUserEvent, LoginCommand);
  }
  // @endif


  // @ifdef SERVER
  registerServices(){
    this.addSerivce(LoginUserEvent, LoginService);
  }
  // @endif
}
