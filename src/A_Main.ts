import LoginMediator from "./timekeeper/login/controller/LoginMediator";
import FabaWebApplication from "fabalous/FabaWebApplication";
import FabaApiConnection from "fabalous/transport/FabaApiConnection";

class A_Main extends FabaWebApplication {
    constructor(){
        super();

        FabaWebApplication.addServerEndPoint(new FabaApiConnection( "http://localhost:3000/"), "api");
    }
}

new A_Main();