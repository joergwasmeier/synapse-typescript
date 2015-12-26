import SynapseMediator from "./core/SynapseMediator";
import SynapseEvent from "./core/SynapseEvent";
import SynapseEventManager from "./core/SynapseEventManager";
import SynapseTransportBase from "./transport/SynapseTransportBase";

export default class WebApplication {
    static mediators:Array<SynapseMediator> = new Array<SynapseMediator>();
    static eventManager = new SynapseEventManager();

    static events:any = {}

    static servers:Array<any> = [];

    constructor() {
    }

    public addMediator(cls:SynapseMediator):boolean {
        for (var obj in WebApplication.mediators) {
            if (obj == cls) return false;
        }

        WebApplication.mediators.push(cls);
        return true;
    }

    static addServerEndPoint(conn:SynapseTransportBase, name:string){
        this.servers.push({name:name, conn:conn});
    }

    static sendToEndpoint(event:SynapseEvent, identifyer:string){
        console.log('sendToEndpoint');

        if (this.servers.length == 0){
            throw new Error("NO ENDPOINT DEFINED");
            return;
        }

        for (let i of this.servers) {
            console.log(i);
            i.conn.send(event);
        }
    }

    static dispatchEvent(event:SynapseEvent, resu?:boolean) {
        for(var a:number = 0; a < 1; a++){
            var routeItem:Array<any> = this.mediators[a].cmdList;


            for(var b:number = 0; b < routeItem.length; b++){
                if (routeItem[b].event.name === event.name){
                    if (resu) new routeItem[b].cmd().result(event);
                    else new routeItem[b].cmd().execute(event);
                }
            }
        }
    }


}
