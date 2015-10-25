import WebApplication = require("../WebApplication");
export = SynapseEvent

class SynapseEvent {
    public name:String;
    public callBack:any = function(){};

    private cbs:any;

    constructor() {
        console.log("SynapseEvent");
    }

    setCallBack(func:any){
        this.cbs = func;
    }

    dispatch(){
        WebApplication.dispatchEvent(this);
    }
}
