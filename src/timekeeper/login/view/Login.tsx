import * as React from 'react';
import * as ReactDOM from 'react-dom';

import MouseEvent = __React.MouseEvent;
import SyntheticEvent = __React.SyntheticEvent;

import {CircularProgress, Toggle, TextField, Paper, FlatButton} from 'material-ui';
import LoginUserEvent from "../controller/event/LoginUserEvent";
import LoginModel from "../model/LoginModel";

var CSSTransitionGroup = require('react-addons-css-transition-group');
require("./Login.less");

export default class Login extends React.Component<{},{}> {
  className:string = "Login";

  static props:{
    who?:string
  }

  state:{
    busy?:boolean,
  }

  componentWillMount():void {
    LoginModel.getInstance().addChangeListener( () => this.forceUpdate());
  }

  componentWillUnmount():void {
    LoginModel.getInstance().removeChangeListener( () => this.forceUpdate());
  }

  private onClickHandler(e:MouseEvent):void {
    LoginModel.getInstance().userName = "Super";

    new LoginUserEvent(LoginModel.getInstance().userName, LoginModel.getInstance().passWord).dispatch((result) => {
      console.log(result);
    });
  }

  private changeUserNameHandler(e:SyntheticEvent):void{
    var input:HTMLInputElement = e.target as HTMLInputElement
    LoginModel.getInstance().userName = input.value;
  }

  private changePassWordHandler(e:SyntheticEvent):void {
    var input:HTMLInputElement = e.target as HTMLInputElement
    LoginModel.getInstance().passWord = input.value;
  }

  private renderProgress():JSX.Element {
    if (LoginModel.getInstance().busy) {
      return (
        <div className="busy">
          <CircularProgress mode="indeterminate"/>
        </div>
      )
    }
  }

  render() {
    return (
      <div className={`center ${this.className}`}>
        <Paper className="loginCard">
          <Paper className="title" zDepth={0}>
            <p>{LoginModel.getInstance().name}</p>
          </Paper>

          <div className="content">

            <TextField className="textField"
                       floatingLabelText="Username"
                       value={LoginModel.getInstance().userName}
                       onChange={e => this.changeUserNameHandler(e)}/>

            <TextField className="textField"
                       floatingLabelText="Password"
                       type="password"
                       value={LoginModel.getInstance().passWord}
                       onChange={e => this.changePassWordHandler(e)}/>

            <Toggle className="autoLogin"
                    value={LoginModel.getInstance().autoLogin}
                    label="Auto login?!" />

            <FlatButton label={this.className} className="loginBt"
                        onClick={e => this.onClickHandler(e)} />
          </div>

          <CSSTransitionGroup transitionName="example" transitionEnterTimeout={500} transitionLeaveTimeout={300}>
            {this.renderProgress()}
          </CSSTransitionGroup>
        </Paper>
      </div>
    )
  }

  public renderToDom(name:any):void {
    ReactDOM.render(<Login/>, name);
  }
}
