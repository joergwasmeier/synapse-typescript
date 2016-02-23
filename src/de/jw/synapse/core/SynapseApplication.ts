import SynapseMediator from "./SynapseMediator";
import SynapseEvent from "./SynapseEvent";
/**
 * Created by creativecode on 26.12.15.
 */

export default class SynapseApplication{
  static mediators:Array<SynapseMediator> = new Array<SynapseMediator>();
  static events:any = {}
  static vos:any = {}

  public addMediator(cls:SynapseMediator):boolean {
    for (let obj in SynapseApplication.mediators) {
     // if (obj === cls){
     //   return false;
     // }
    }

    SynapseApplication.mediators.push(cls);
    return true;
  }

  static dispatchEvent(event:SynapseEvent, resu?:boolean) {
    for(var a:number = 0; a < 1; a++){
      var routeItem:Array<any> = this.mediators[a].cmdList;

      for(var b:number = 0; b < routeItem.length; b++){
        if (routeItem[b] && routeItem[b].event && routeItem[b].event.name){
          if (routeItem[b].event.name === event.name){
            if (resu) new routeItem[b].cmd().result(event);
            else new routeItem[b].cmd().execute(event);
          }
        }
      }
    }
  }


}