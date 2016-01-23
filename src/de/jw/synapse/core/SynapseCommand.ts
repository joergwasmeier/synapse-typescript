import SynapseEvent from "./SynapseEvent";
import WebApplication from "../WebApplication";

export default class SynapseCommand {
    constructor() {
    }

    protected sendToEndpoint(event:SynapseEvent, endPoint?:string) {
        WebApplication.sendToEndpoint(event, endPoint)
    }
}
