import WebApplication from "../WebApplication";

export default class SynapseEvent {
    public name:String;
    public callBack:any = function(){};

    private cbs:any;

    constructor() {
    }

    setCallBack(func:any){
        this.cbs = func;
    }

    dispatch(){
        WebApplication.dispatchEvent(this);
    }
}
