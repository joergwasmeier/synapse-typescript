import React = require('react');
import ReactDOM = require('react-dom');

import Test = require('./de/js/test/Test');
import Test2 = require('./de/js/test/Test2');

import LoginModel = require('./de/js/login/model/LoginModel');

//console.log(LoginModel);
//console.log(LoginModel.getInstance().getScore());
LoginModel.getInstance().setScore(20);
class MyComponent extends React.Component<{},{}> {
    props: {
      who?:string
    }

    render() {
        return <span>
            <Test/>
            <Test2 mega="test" mega2="test2"/>
        </span>
    }
}

ReactDOM.render(<MyComponent who="Hallo" />, document.getElementById("container"));
