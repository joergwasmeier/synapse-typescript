import SynapseRouter = require("./core/SynapseRouter");
import SynapseEvent = require("./core/SynapseEvent");
import SynapseEventManager = require("./core/SynapseEventManager");

class WebApplication {
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
                console.log(event.name);
                console.log(routeItem[b].event.name);

                if (routeItem[b].event.name === event.name){
                    console.log("Found");
                    console.log(routeItem[b].cmd);
                    new routeItem[b].cmd().execute(event);

                }
            }



        }
    }
}

export = WebApplication;
