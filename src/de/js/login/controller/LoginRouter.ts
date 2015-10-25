import SynapseRouter = require("../../../jw/synapse/core/SynapseRouter");

class LoginRouter extends SynapseRouter{
  constructor(){
    this.addCommand(LoginUserEvent, LoginCommand);
    this.addSerivce(LoginUserEvent, LoginCommand);

    this.addCommServ(LoginUserEvent, LoginCommand, LoginService);

    super();
  }
}

export = LoginRouter;
