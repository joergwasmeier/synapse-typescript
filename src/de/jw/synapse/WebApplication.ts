import SynapseRouter = require("./core/SynapseRouter");


class WebApplication{
    routers:Array<SynapseRouter> = new Array<SynapseRouter>();

    constructor(){
        console.log("WebApplication")
    }

    public addRouter(cls:SynapseRouter):void{
        this.routers.push(cls);
        console.log(cls);
    }
}

export = WebApplication;
