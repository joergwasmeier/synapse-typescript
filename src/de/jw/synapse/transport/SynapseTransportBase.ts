import SynapseEvent from "../core/SynapseEvent";
import {trace} from "../utils/Logger";

export default class SynapseTransportBase{
    private evnid:string;

    private runningQuerysNew:Array<any> = [];
    private runningQuerys:Array<any>;

    constructor(){

    }

    protected prepareEventToSend(event:SynapseEvent, compress:boolean = true):string {
        var qId = Math.random();
        //event.qId = qId;

        event.identifyer = event.getClassName();

        this.runningQuerysNew.push({e:event, q:qId, v:0, clb: event.callBack});
        event.callBack = null;
        
        var serilizedData:string = JSON.stringify(event);
        return serilizedData;
    }

    protected messageHandler(incomingMsg:any):void {
        //data = JSON.parse(incomingMsg);
    }

}