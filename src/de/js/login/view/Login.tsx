import React = require('react');
import ReactDOM = require('react-dom');
import MouseEvent = __React.MouseEvent;
import SyntheticEvent = __React.SyntheticEvent;
import LoginUserEvent = require("../controller/event/LoginUserEvent");
import FlatButton = require('material-ui/lib/flat-button');
import Paper = require('material-ui/lib/paper');
import TextField = require('material-ui/lib/text-field');
import Toggle = require('material-ui/lib/toggle');


require("./Login.less");

export = Login;

class Login extends React.Component<{},{}> {
    className:string = "Login";
    userName:string;
    passWord:string;

    static props:{
        who?:string
    }

    private onClickHandler(e:MouseEvent) {
        new LoginUserEvent(this.userName, this.passWord).dispatch()
    }

    private changeUserNameHandler(e:SyntheticEvent) {
        var input:HTMLInputElement = e.target as HTMLInputElement
        this.userName = input.value;
    }

    private changePassWordHandler(e:SyntheticEvent) {
        var input:HTMLInputElement = e.target as HTMLInputElement
        this.passWord = input.value;
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

                    <FlatButton label="LOGIN" className="loginBt" primary={true}></FlatButton>
                </Paper>
            </div>
        )
    }

    public renderToDom(name:string = "container") {
        ReactDOM.render(<Login/>, document.getElementById(name));
    }
}

