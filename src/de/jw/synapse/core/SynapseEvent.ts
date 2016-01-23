import WebApplication from "../WebApplication";
import SynapseApplication from "./SynapseApplication";

export default class SynapseEvent {

    identifyer:string;

    public callBack:any = function(){
        this.cbs(this);
    };

    private cbs:any;

    constructor() {
    }

    get name():string{
        return this.getClassName();
    }

    getClassName() : string{
        return this.constructor.toString().match(/\w+/g)[1];
    }

    stGetClassName() : string{
        return this.constructor.toString().match(/\w+/g)[1];
    }

    setCallBack(func:any){
        this.cbs = func;
    }


    dispatch(calb?:any, result?:boolean):void{
        if (calb){
            if (!this.callBack){
                this.callBack = function(){
                    this.cbs(this);
                };
            }
            this.cbs = calb;
        }
        SynapseApplication.dispatchEvent(this, result);
    }
}
