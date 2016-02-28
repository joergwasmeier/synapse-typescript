import SynapseSerivce from "../../../../../jw/synapse/core/SynapseService";
import SynapseEvent from "../../../../../jw/synapse/core/SynapseEvent";
import LoginUserEvent from "../event/LoginUserEvent";
import UserCollection from "../../../common/collections/UserCollection";
import UserVo from "../../model/vo/UserVo";
import {trace} from "../../../../../jw/synapse/utils/Logger";


export default class LoginService extends SynapseSerivce {
    users:UserCollection = new UserCollection();

    async execute(event:LoginUserEvent) {

        event.user.address.fullAdress();

        if (!event.username || !event.password) {
            this.sendToClient(event);
            return;
        }


        let usersRt:Array<UserVo> = await this.users.getUser("Hallo");

        if (usersRt){
            usersRt.map((user)=>{
                //trace(user);
            });
        }

        await this.users.createtUser("Hallo 2");

        let loginSuccess = await this.users.checkLoginData(event.username, event.password);

       // console.log(loginSuccess);

        if (loginSuccess){
          //  console.log("true");
            event.loggedIn = true;
        } else {
           // console.log("false");
            event.loggedIn = false;
        }

        this.sendToClient(event);
    }
}
