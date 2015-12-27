import SynapseSerivce from "../../../../../jw/synapse/core/SynapseService";
import SynapseEvent from "../../../../../jw/synapse/core/SynapseEvent";
import LoginUserEvent from "../event/LoginUserEvent";
import UserCollection from "../../../common/collections/UserCollection";
import UserVo from "../../model/vo/UserVo";


export default class LoginService extends SynapseSerivce {
    users:UserCollection = new UserCollection();

    async execute(event:LoginUserEvent) {

        console.log("sdfdsds");

        if (!event.username || !event.password) {
            this.sendToClient(event);
            return;
        }

        var users = await this.users.getUser("Hallo");
        //var users = <Array<any>> result;
        users.map((user)=>{
            console.log(user);
        })

        await this.users.createtUser("Hallo");


        console.log("users");

        //let loginSuccess = this.users.checkLoginData(event.username, event.password);

        if (true){
            console.log("true");
            event.loggedIn = true;
        } else {
            console.log("false");
            event.loggedIn = false;
        }

        this.sendToClient(event);
    }
}
