import * as React from 'react';
import * as ReactDOM from 'react-dom';

import MouseEvent = __React.MouseEvent;
import SyntheticEvent = __React.SyntheticEvent;

import {CircularProgress, Toggle, TextField, Paper, FlatButton} from 'material-ui';
import LoginUserEvent from "../controller/event/LoginUserEvent";
import LoginModel from "../model/LoginModel";
import SynapseModel from "../../../../jw/synapse/core/SynapseModel";

var CSSTransitionGroup = require('react-addons-css-transition-group');
require("./Login.less");

export default class Login extends React.Component<{},{}> {
    className:string = "Login";

    static props:{
        who?:string
    }

    state:{
        busy?:boolean
    }

    componentWillMount():void {
        LoginModel.addChangeListener( () => this.forceUpdate());
    }

    componentWillUnmount():void {
        LoginModel.removeChangeListener( () => this.forceUpdate());
    }

    private onClickHandler(e:MouseEvent):void {
        new LoginUserEvent(LoginModel.userName, LoginModel.passWord).dispatch();

        //@ifdef NODE
        console.log("SSTEST");

        //@endif

        /* @if NODE */
        console.log("SSTEST 2");
        /* @endif */
    }

    private changeUserNameHandler(e:SyntheticEvent):void{
        var input:HTMLInputElement = e.target as HTMLInputElement
        LoginModel.userName = input.value;
    }

    private changePassWordHandler(e:SyntheticEvent):void {
        var input:HTMLInputElement = e.target as HTMLInputElement
        LoginModel.passWord = input.value;
    }

    private renderProgress():JSX.Element {
        if (LoginModel.busy) {
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
                        <p>{LoginModel.userName}</p>
                    </Paper>

                    <div className="content">

                        <TextField className="textField"
                                   floatingLabelText="Username"
                                   value={LoginModel.userName}
                                   onChange={e => this.changeUserNameHandler(e)}/>

                        <TextField className="textField"
                                   floatingLabelText="Password"
                                   type="password"
                                   value={LoginModel.passWord}
                                   onChange={e => this.changePassWordHandler(e)}/>

                        <Toggle className="autoLogin"
                                value={LoginModel.autoLogin}
                                label="Auto login?!" />

                        <FlatButton label="LOGIN" className="loginBt"
                                    onClick={e => this.onClickHandler(e)} />
                    </div>

                    <CSSTransitionGroup transitionName="example" transitionEnterTimeout={500} transitionLeaveTimeout={300}>
                        {this.renderProgress()}
                    </CSSTransitionGroup>
                </Paper>
            </div>
        )
    }

    public renderToDom(name:string = "container"):void {
        ReactDOM.render(<Login/>, document.getElementById(name));
    }
}
