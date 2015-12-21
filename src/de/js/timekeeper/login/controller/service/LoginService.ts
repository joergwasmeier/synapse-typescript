import SynapseSerivce from "../../../../../jw/synapse/core/SynapseService";
import SynapseEvent from "../../../../../jw/synapse/core/SynapseEvent";
import LoginUserEvent from "../event/LoginUserEvent";

export default class LoginService extends SynapseSerivce {
    public exexute(event:SynapseEvent) {

        switch (event.getClassName()) {
            case LoginUserEvent.name:
                this.loginUserEvent(<LoginUserEvent> event);
                break;
            }
    }

    private loginUserEvent(event:LoginUserEvent){
        if (event.username == "admin" && event.password == "test"){
            console.log("LoggedIn");
            event.loggedIn = true;

            //@ifdef NODE
            console.log("CCTEST");
            //@endif

            /* @ifdef NODE */
            console.log("CCTEST 2");
            /* @endif */

            super.emitCaller(event);
        }
    }
}
