import SynapseModel from "../../../../jw/synapse/core/SynapseModel";
import Bindable from "../../../../jw/synapse/decorators/Bindable";

export class LoginModel_in extends SynapseModel {

    private static _instance:LoginModel_in = new LoginModel_in();

    @Bindable
    name:string;

    @Bindable
    busy:boolean;

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


    addChangeListener(cb) {
        return super.addChangeListener(cb);
    }

    removeChangeListener(cb) {
        return super.removeChangeListener(cb);
    }
}

const LoginModel = LoginModel_in.getInstance();
export default LoginModel;
