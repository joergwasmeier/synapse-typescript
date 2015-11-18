import SynapseMediator from "../../../jw/synapse/core/SynapseMediator";
import LoginUserEvent from "./event/LoginUserEvent";
import LoginCommand from "./command/LoginCommand";
import LoginService from './service/LoginService';
import LoginShowEvent from "./event/LoginShowEvent";

export default class LoginMediator extends SynapseMediator {
    constructor() {
        super();

        //this.addCommand(LoginUserEvent, LoginCommand);
        this.addCommand(LoginShowEvent, LoginCommand);

        this.addSerivce(LoginUserEvent, LoginCommand);

        this.addCommServ(LoginUserEvent, LoginCommand, LoginService);


    }
}
