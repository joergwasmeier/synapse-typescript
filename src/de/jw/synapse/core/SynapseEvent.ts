import WebApplication from "../WebApplication";

export default class SynapseEvent {
    public callBack:any = function(){};

    private cbs:any;

    constructor() {
    }

    get name():String{
        return this.getClassName();
    }

    getClassName() : String{
        return this.constructor.toString().match(/\w+/g)[1];
    }

    setCallBack(func:any){
        this.cbs = func;
    }

    dispatch(){
        WebApplication.dispatchEvent(this);
    }
}
