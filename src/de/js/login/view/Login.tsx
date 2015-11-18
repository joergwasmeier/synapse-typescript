import * as React from 'react';
import * as ReactDOM from 'react-dom';
import MouseEvent = __React.MouseEvent;
import SyntheticEvent = __React.SyntheticEvent;
//import LoginUserEvent from "../controller/event/LoginUserEvent";

import LoginUserEvent from "de/js/login/controller/event/LoginUserEvent";


import {CircularProgress, Toggle, TextField, Paper, FlatButton} from 'material-ui';

require("./Login.less");

export default class Login extends React.Component<{},{}> {
    className:string = "Login";
    userName:string;
    passWord:string;

    static props:{
        who?:string
    }

    state:{
        busy?:boolean
    }

    private onClickHandler(e:MouseEvent) {
        console.log("onClickHandler");
        new LoginUserEvent(this.userName, this.passWord).dispatch();
        this.setState({busy:true});
    }

    private changeUserNameHandler(e:SyntheticEvent) {
        var input:HTMLInputElement = e.target as HTMLInputElement
        this.userName = input.value;
    }

    private changePassWordHandler(e:SyntheticEvent) {
        var input:HTMLInputElement = e.target as HTMLInputElement
        this.passWord = input.value;
    }

   private renderProgress() {
        if ( this.state && this.state.busy ) {
            return (
                <div className="busy">
                    <CircularProgress mode="indeterminate" />
                </div>
            )
        }
    }

    render() {
        return (
            <div className="center">
                <Paper className="loginCard">
                    <Paper className="title" zDepth={0}>
                        <p>TIMEKEEPER</p>
                    </Paper>

                    <div className="content">
                        <TextField className="textField"
                                   floatingLabelText="Username"
                                   onChange={this.changeUserNameHandler}/>

                        <TextField className="textField"
                                   floatingLabelText="Password"
                                   type="password"
                                   onChange={this.changePassWordHandler}/>

                        <Toggle name="toggleName1" className="autoLogin"
                                value="toggleValue1"
                                label="Auto login?!"/>

                        <FlatButton label="LOGIN" className="loginBt" onClick={e => this.onClickHandler(e)}></FlatButton>
                    </div>


                    {this.renderProgress()}

                </Paper>
            </div>
        )
    }

    public renderToDom(name:string = "container") {
        ReactDOM.render(<Login/>, document.getElementById(name));
    }
}
