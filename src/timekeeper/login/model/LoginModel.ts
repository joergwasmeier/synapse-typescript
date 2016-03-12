import UserVo from "./vo/UserVo";
import FabaBindable from "fabalous/dist/decorators/FabaBindable";
import FabaModel from "fabalous/dist/core/FabaModel";

export default class LoginModel extends FabaModel {
    private static _instance:LoginModel = new LoginModel();

    @FabaBindable
    name:string = "dsdf dff";

    @FabaBindable
    busy:boolean;

    @FabaBindable
    userName:string;

    @FabaBindable
    passWord:string;

    @FabaBindable
    autoLogin:string;

    @FabaBindable
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