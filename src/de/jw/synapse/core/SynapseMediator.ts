export = LoginMediator

class LoginMediator{
  cmdList = new Array<Object>();

  constructor(){
  }

  addCommand(eventName, command){
    this.cmdList.push({event:eventName, cmd:command})
  }

  addSerivce(eventName, command){
      

  }

  addCommServ(eventName, command, serive){

  }
}
