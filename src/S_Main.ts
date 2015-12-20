import WebApplication from "./de/jw/synapse/WebApplication";
import LoginMediator from "./de/js/timekeeper/login/controller/LoginMediator";


class S_Main extends WebApplication {
    constructor() {
        super();

        this.addMediator(new LoginMediator());
        console.log("Server Start");
    }

}

new S_Main();

