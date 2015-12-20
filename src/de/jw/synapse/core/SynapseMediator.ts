import {ISynapseMediator} from "./ISynapseMediator";

export default class SynapseMediator implements ISynapseMediator{
  cmdList = new Array<Object>();

  constructor(){
    // @ifdef CLIENT
    this.registerCommands();
    // @endif

    // @ifdef SERVER
    this.registerServices();
    // @endif
  }

  addCommand(eventName, command){
    this.cmdList.push({event:eventName, cmd:command})
  }

  addSerivce(eventName, command){

  }

  registerCommands(){

  }

  registerServices(){

  }
}
