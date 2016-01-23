import SynapseEvent from "../../../../../jw/synapse/core/SynapseEvent";
import UserVo from "../../model/vo/UserVo";

export default class LoginUserEvent extends SynapseEvent {
    public static LOGIN:String = "Login";

    username:string;
    password:string;

    loggedIn:boolean;

    user:UserVo;

    users:Array<UserVo>;

    constructor(username?:string, password?:string) {
        super();

        this.username = username;
        this.password = password;

        this.user = new UserVo();
        this.user.username = username;
        this.user.password = password;

        this.users = new Array();
        this.users.push(this.user);
        this.users.push(this.user);
        this.users.push(this.user);
    }

    private test(){
        return "test";
    }
}
