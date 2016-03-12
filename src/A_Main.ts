//import "babel-polyfill";

import LoginMediator from "./timekeeper/login/controller/LoginMediator";
//import FabaApiConnection from "fabalous/transport/FabaApiConnection";
//import LoginShowEvent from "./timekeeper/login/controller/event/LoginShowEvent";
import FabaWebApplication from "fabalous/dist/FabaWebApplication";
import LoginShowEvent from "./timekeeper/login/controller/event/LoginShowEvent";


class A_Main extends FabaWebApplication {
    constructor(){
        super();

        //FabaWebApplication.addServerEndPoint(new FabaApiConnection( "http://localhost:3000/"), "api");

        this.addMediator(new LoginMediator());

        new LoginShowEvent(document.getElementById("container")).dispatch();
        //console.log("test");

    }
}

new A_Main();