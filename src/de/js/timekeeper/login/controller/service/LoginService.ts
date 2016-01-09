import SynapseSerivce from "../../../../../jw/synapse/core/SynapseService";
import SynapseEvent from "../../../../../jw/synapse/core/SynapseEvent";
import LoginUserEvent from "../event/LoginUserEvent";
import UserCollection from "../../../common/collections/UserCollection";
import UserVo from "../../model/vo/UserVo";
import {trace} from "../../../../../jw/synapse/utils/Logger";


export default class LoginService extends SynapseSerivce {
    users:UserCollection = new UserCollection();

    async execute(event:LoginUserEvent) {
        if (!event.username || !event.password) {
            this.sendToClient(event);
            return;
        }

        var users:Array<UserVo> = await this.users.getUser("Hallo");

        if (users){
            users.map((user)=>{
                trace(user);
            });
        }

        await this.users.createtUser("Hallo");

        let loginSuccess = this.users.checkLoginData(event.username, event.password);

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
