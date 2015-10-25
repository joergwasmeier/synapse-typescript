import SynapseMediator = require("../../../jw/synapse/core/SynapseMediator");
import LoginUserEvent = require("./event/LoginUserEvent");
import LoginCommand = require("./command/LoginCommand");
import LoginService = require('./service/LoginService');
import LoginShowEvent = require("./event/LoginShowEvent");

class LoginMediator extends SynapseMediator {
    constructor() {
        super();

        //this.addCommand(LoginUserEvent, LoginCommand);
        this.addCommand(LoginShowEvent, LoginCommand);

        this.addSerivce(LoginUserEvent, LoginCommand);

        this.addCommServ(LoginUserEvent, LoginCommand, LoginService);


    }
}

export = LoginMediator;
