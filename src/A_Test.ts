import FabaWebApplication from "fabalous/dist/FabaWebApplication";
import LoginMediator from "./timekeeper/login/controller/LoginMediator";
import FabaApiConnection from "fabalous/dist/transport/FabaApiConnection";

export default class A_Test extends FabaWebApplication {
    constructor() {
        super();

        FabaWebApplication.addServerEndPoint(new FabaApiConnection( "http://localhost:3000/"), "api");

        this.addMediator(new LoginMediator());

    }
}