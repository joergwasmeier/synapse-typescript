import WebApplication = require("./de/jw/synapse/WebApplication");
import LoginRouter = require("./de/js/login/controller/LoginRouter");

class A_Main extends WebApplication{
    constructor(){
      super();

      this.addRouter(new LoginRouter());

      // implement react router
    }


}

new A_Main();
