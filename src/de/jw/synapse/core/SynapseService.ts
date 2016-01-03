import SynapseEvent from "./SynapseEvent";

export default class SynapseSerivce {
    sendToClient(ev:SynapseEvent) {
        ev.callBack();
    }
}
