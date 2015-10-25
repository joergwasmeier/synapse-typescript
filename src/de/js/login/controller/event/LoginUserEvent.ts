import SynapseEvent = require("../../../../jw/synapse/core/SynapseEvent");

class LoginUserEvent extends SynapseEvent{
  public static LOGIN:String = "Login";

  username:string;
  password:string;

  constructor(username:string, password:string){
    this.username = username;
    this.password = password;

    super();
  }
}

export = LoginUserEvent
