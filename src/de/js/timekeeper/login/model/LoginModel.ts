import SynapseModel from "../../../../jw/synapse/core/SynapseModel";
import Bindable from "../../../../jw/synapse/decorators/Bindable";
import UserVo from "./vo/UserVo";

export default class LoginModel extends SynapseModel {
    private static _instance:LoginModel = new LoginModel();

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

        if (LoginModel._instance) {
            throw new Error("Error: Instantiation failed: Use LoginModel.getInstance().getInstance() instead of new.");
        }

        LoginModel._instance = this;
    }

    public static getInstance():LoginModel {
        return LoginModel._instance;
    }
}