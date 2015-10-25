export = SynapseCommand

import SynapseEvent = require("./SynapseEvent");

class SynapseCommand{
  constructor(){
    console.log("SynapseCommand");
  }

  execute(event:SynapseEvent){
    
  }
}
