import SynapseEvent from "./core/SynapseEvent";
import SynapseEventManager from "./core/SynapseEventManager";
import SynapseTransportBase from "./transport/SynapseTransportBase";
import SynapseApplication from "./core/SynapseApplication";

//declare var module;
//module.hot.accept()

export default class WebApplication extends SynapseApplication {
    static eventManager = new SynapseEventManager();
    static servers:Array<any> = [];


    static addServerEndPoint(conn:SynapseTransportBase, name:string){
        this.servers.push({name:name, conn:conn});
    }

    static sendToEndpoint(event:SynapseEvent, identifyer:string){
        if (this.servers.length == 0){
            throw new Error("NO ENDPOINT DEFINED");
        }

        for (let i of this.servers) {
            i.conn.send(event);
        }
    }
}