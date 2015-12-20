import SynapseEvent from "./SynapseEvent";
export default class SynapseSerivce{
  constructor(){
    console.log("SynapseSerivce");
  }

  emitCaller(ev:SynapseEvent){
    console.log("emitcaller");
  }
}
