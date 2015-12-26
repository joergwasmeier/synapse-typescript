import SynapseEvent from "./SynapseEvent";
export default class SynapseSerivce {
    constructor() {
        console.log("SynapseSerivce");
    }

    sendToClient(ev:SynapseEvent) {
        console.log("sendToClient");
        ev.callBack();

    }
}
