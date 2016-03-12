/**
 * Created by creativecode on 25.12.15.
 */
import LoginShowEvent from "../event/LoginShowEvent";
import Login from  "../../view/Login";
import LoginUserEvent from "../event/LoginUserEvent";
import LoginModel from "../../model/LoginModel";
import UserVo from "../../model/vo/UserVo";
import FabaCommand from "fabalous/dist/core/FabaCommand";
import FabaWebApplication from "fabalous/dist/FabaWebApplication";


export default class LoginUserCommand extends FabaCommand {
    execute(event:LoginUserEvent) {
        LoginModel.getInstance().busy = false;

        var hallo:UserVo = new UserVo();
        hallo.username = "toll";
        hallo.password = "tollo";

        event.user = hallo;

        FabaWebApplication.servers[0].conn.send(event);
        this.sendToEndpoint(event);
    }

    result(event:LoginUserEvent){
        LoginModel.getInstance().name = event.username;
        LoginModel.getInstance().busy = false;
    }
}
