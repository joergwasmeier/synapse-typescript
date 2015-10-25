import SynapseEvent = require("../../../../jw/synapse/core/SynapseEvent");

class LoginUserEvent extends SynapseEvent{
  public static LOGIN:String = "Login";

}

export = LoginUserEvent
