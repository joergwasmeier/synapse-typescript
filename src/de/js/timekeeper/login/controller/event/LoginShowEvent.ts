import SynapseEvent from "../../../../../jw/synapse/core/SynapseEvent";

export default class LoginShowEvent extends SynapseEvent {
    public static SHOW:String = "SHOW";

    constructor() {
        super();
    }
}