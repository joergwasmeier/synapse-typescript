import SynapseEvent from "../../../../jw/synapse/core/SynapseEvent";

export default class LoginShowEvent extends SynapseEvent {
  //  public static name:String = "LoginShowEvent";
    public static SHOW:String = "SHOW";

    name:String = "LoginShowEvent";

    constructor() {
        super();

        //this.name = LoginShowEvent.name;
    }

}
