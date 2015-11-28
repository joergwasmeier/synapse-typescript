import SynapseEvent from "../../../../../jw/synapse/core/SynapseEvent";

export default class LoginUserEvent extends SynapseEvent {
    public static LOGIN:String = "Login";

    username:string;
    password:string;

    name:String = "LoginUserEvent";


    constructor(username:string, password:string) {
        super();

        this.username = username;
        this.password = password;
    }
}
