import SynapseSerivce from "../../../../../jw/synapse/core/SynapseService";
import SynapseEvent from "../../../../../jw/synapse/core/SynapseEvent";
import LoginUserEvent from "../event/LoginUserEvent";

export default class LoginService extends SynapseSerivce {
    public execute(event:LoginUserEvent) {
        if (event.username == "admin" && event.password == "test"){

            event.loggedIn = true;

            setTimeout(() => {
                event.callBack();
            },2000);
        }
    }
}
