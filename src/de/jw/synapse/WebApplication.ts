import SynapseRouter from "./core/SynapseMediator";
import SynapseEvent from "./core/SynapseEvent";
import SynapseEventManager from "./core/SynapseEventManager";

export default class WebApplication {
    static routers:Array<SynapseRouter> = new Array<SynapseRouter>();
    static eventManager = new SynapseEventManager();

    constructor() {
    }

    public addRouter(cls:SynapseRouter):void {
        WebApplication.routers.push(cls);
    }

    static dispatchEvent(event:SynapseEvent) {
        for(var a:number = 0; a < 1; a++){
            var routeItem:Array<any> = this.routers[a].cmdList;

            for(var b:number = 0; b < routeItem.length; b++){
                if (routeItem[b].event.name === event.name){
                    new routeItem[b].cmd().execute(event);
                }
            }



        }
    }
}
