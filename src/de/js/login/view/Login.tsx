import React = require('react');
import ReactDOM = require('react-dom');
import MouseEvent = __React.MouseEvent;

class Login extends React.Component<{},{}> {
    props: {
      who?:string
    }

    onClickHandler(e:MouseEvent){
        console.log("Click Handler");
    }

    changeUserNameHandler(){

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
}
