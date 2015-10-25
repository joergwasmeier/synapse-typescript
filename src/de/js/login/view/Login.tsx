import React = require('react');
import ReactDOM = require('react-dom');
import MouseEvent = __React.MouseEvent;
import SyntheticEvent = __React.SyntheticEvent;
import LoginUserEvent = require("../controller/event/LoginUserEvent");
import FlatButton = require('material-ui/lib/flat-button');
import Paper = require('material-ui/lib/paper');
import TextField = require('material-ui/lib/text-field');
import Toggle = require('material-ui/lib/toggle');
import CircularProgress = require('material-ui/lib/circular-progress');


require("./Login.less");

export = Login;

class Login extends React.Component<{},{}> {
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

                    <FlatButton label="LOGIN" className="loginBt" primary={true} onClick={e => this.onClickHandler(e)}></FlatButton>

                    {this.renderProgress()}

                </Paper>
            </div>
        )
    }

    public renderToDom(name:string = "container") {
        ReactDOM.render(<Login/>, document.getElementById(name));
    }
}

