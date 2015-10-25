import SynapseEvent = require("../../../../jw/synapse/core/SynapseEvent");

class LoginShowEvent extends SynapseEvent {
    public static name:String = "LoginShowEvent";
    public static SHOW:String = "SHOW";
    public name:String;
    constructor() {
        this.name = LoginShowEvent.name;
        super();
    }

}

export = LoginShowEvent
