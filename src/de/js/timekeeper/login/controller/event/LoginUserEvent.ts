import SynapseEvent from "../../../../../jw/synapse/core/SynapseEvent";
import UserVo from "../../model/vo/UserVo";

export default class LoginUserEvent extends SynapseEvent {
    public static LOGIN:String = "Login";

    username:String;
    password:String;

    loggedIn:Boolean;

    user:UserVo;

    constructor(username:String, password:String) {
        super();

        this.username = username;
        this.password = password;

        this.user = new UserVo();
        this.user.username = username;
        this.user.password = password;

        this.user.validate();
    }
}
