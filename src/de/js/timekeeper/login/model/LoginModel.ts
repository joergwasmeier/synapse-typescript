import SynapseModel from "../../../../jw/synapse/core/SynapseModel";
import Bindable from "../../../../jw/synapse/decorators/Bindable";
import UserVo from "./vo/UserVo";

class LoginModel_in extends SynapseModel {

    private static _instance:LoginModel_in = new LoginModel_in();

    @Bindable
    name:string = "dsdf dff";

    @Bindable
    busy:boolean;

    @Bindable
    userName:string;

    @Bindable
    passWord:string;

    @Bindable
    autoLogin:string;

    @Bindable
    userData:UserVo;

    constructor() {
        super();

        if (LoginModel_in._instance) {
            throw new Error("Error: Instantiation failed: Use LoginModel.getInstance() instead of new.");
        }
        LoginModel_in._instance = this;


    }

    public static getInstance():LoginModel_in {
        return LoginModel_in._instance;
    }
}

let LoginModel = LoginModel_in.getInstance();

export default LoginModel;