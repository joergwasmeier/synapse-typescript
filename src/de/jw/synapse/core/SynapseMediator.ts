import {ISynapseMediator} from "./ISynapseMediator";
import WebApplication from "../WebApplication";

export default class SynapseMediator implements ISynapseMediator {
    cmdList = new Array<Object>();

    constructor() {
        // @ifdef CLIENT
        this.registerCommands();
        // @endif

        // @ifdef SERVER
        this.registerServices();
        // @endif
    }

    addCommand(eventName, command) {
        this.cmdList.push({event: eventName, cmd: command});
        WebApplication.events[eventName.name] = eventName;
    }

    addSerivce(eventName, command) {
        this.cmdList.push({event: eventName, cmd: command});
        WebApplication.events[eventName.name] = eventName;
    }

    registerCommands() {

    }

    registerServices() {

    }
}
