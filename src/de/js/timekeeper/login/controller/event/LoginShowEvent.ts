import SynapseEvent from "../../../../../jw/synapse/core/SynapseEvent";

export default class LoginShowEvent extends SynapseEvent{
    target:any;

    constructor(target:any) {
        super();

        this.target = target;
    }
}