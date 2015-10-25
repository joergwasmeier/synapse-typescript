import React = require('react');
import ReactDOM = require('react-dom');

import LoginUserEvent = require("../controller/event/LoginUserEvent");


class MyComponent extends React.Component<{},{}> {
    props: {
      who?:string
    }

    onClickHandler(e:MouseEvent){
      console.log(LoginUserEvent.LOGIN);
    }

    render() {
        return <span>
          
        </span>
    }
}
