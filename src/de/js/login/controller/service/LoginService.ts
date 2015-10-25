class LoginService{
  public exexute(event,name){
    console.log("Execute");
    switch(name){
      case LoginUserEvent.LOGIN:
        this.loginUser();
    }
  }

  loginUser(){
    console.log("LoginUser");
  }
}
