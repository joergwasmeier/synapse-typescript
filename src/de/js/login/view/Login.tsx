import React = require('react');
import ReactDOM = require('react-dom');
import MouseEvent = __React.MouseEvent;

export = Login;

class Login extends React.Component<{},{}> {
    static props: {
      who?:string
    }

    private onClickHandler(e:MouseEvent){
        console.log("Click Handler");
    }

    private changeUserNameHandler(){
        console.log("changeUserNameHandler");
    }

    render() {
        return(
            <span>
              <div>Login</div>
              <input placeholder="Username" onChange={this.changeUserNameHandler}/>
              <button onClick={this.onClickHandler}>LOGIN</button>
            </span>
        )
    }

    public renderToDom(name:string = "container"){
        ReactDOM.render(<Login/>, document.getElementById(name));
    }
}

