import LoginShowEvent from "./timekeeper/login/controller/event/LoginShowEvent";
import LoginMediator from "./timekeeper/login/controller/LoginMediator";
import FabaWebApplication from "fabalous/FabaWebApplication";
import FabaApiConnection from "fabalous/transport/FabaApiConnection";

export default class A_Test extends FabaWebApplication {
    constructor() {
        super();
        FabaWebApplication.addServerEndPoint(new FabaApiConnection( "http://localhost:3000/"), "api");

        this.addMediator(new LoginMediator());
    }
}