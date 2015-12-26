import SynapseSerivce from "../../../../../jw/synapse/core/SynapseService";
import SynapseEvent from "../../../../../jw/synapse/core/SynapseEvent";
import LoginUserEvent from "../event/LoginUserEvent";

export default class LoginService extends SynapseSerivce {

    userCollection:UserCollection;

    async execute(event:LoginUserEvent) {
        //
        if (!event.username || !event.password) {
            this.sendToClient(event);
            return;
        }

        let loginSuccess = await this.userCollection.checkLoginData(event.username, event.password);

        if (loginSuccess){
            console.log("true");
            event.loggedIn = true;
        } else {
            console.log("false");
            event.loggedIn = false;
        }

        this.sendToClient(event);
    }
}
