import SynapseEvent from "./SynapseEvent";
import WebApplication from "../WebApplication";

export default class SynapseCommand {
    constructor() {
    }

    execute(event:SynapseEvent) {

    }

    result(event:SynapseEvent) {

    }

    timeout(event:SynapseEvent) {

    }

    error(event:SynapseEvent) {

    }

    offline(event:SynapseEvent) {

    }

    protected sendToEndpoint(event:SynapseEvent, endPoint?:string) {
        WebApplication.sendToEndpoint(event, endPoint)
    }
}
