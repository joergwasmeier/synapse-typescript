import SynapseMediator from "./core/SynapseMediator";
import SynapseEvent from "./core/SynapseEvent";
import SynapseEventManager from "./core/SynapseEventManager";

export default class WebApplication {
    static mediators:Array<SynapseMediator> = new Array<SynapseMediator>();
    static eventManager = new SynapseEventManager();

    constructor() {
    }

    public addMediator(cls:SynapseMediator):boolean {
        for (var obj in WebApplication.mediators) {
            if (obj == cls) return false;
        }

        WebApplication.mediators.push(cls);
        return true;
    }

    static dispatchEvent(event:SynapseEvent) {
        console.log(event);

        for(var a:number = 0; a < 1; a++){
            var routeItem:Array<any> = this.mediators[a].cmdList;


            for(var b:number = 0; b < routeItem.length; b++){
                if (routeItem[b].event.name === event.name){
                    new routeItem[b].cmd().execute(event);
                }
            }
        }
    }


}
