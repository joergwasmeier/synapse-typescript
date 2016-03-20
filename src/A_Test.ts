import LoginMediator from "fabalous-login/controller/LoginMediator";
import FabaWebApplication from "fabalous/runtimes/FabaWebApplication";
import FabaApiConnection from "fabalous/transport/FabaApiConnection";

export default class A_Test extends FabaWebApplication {
    constructor() {
        super();

        FabaWebApplication.addServerEndPoint(new FabaApiConnection( "http://localhost:3000/"), "api");

        this.addMediator(new LoginMediator());

    }
}