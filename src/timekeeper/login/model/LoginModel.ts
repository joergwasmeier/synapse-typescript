import UserVo from "./vo/UserVo";
import Bindable from "fabalous/decorators/Bindable";
import FabaModel from "fabalous/core/FabaModel";

export default class LoginModel extends FabaModel {
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