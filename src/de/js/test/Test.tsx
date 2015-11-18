import "./Test.less";
import * as React from 'react';
import LoginModel from '../login/model/LoginModel';

class Test extends React.Component<{},{}> {
    public clickHandler():void{
      console.log("clickHandler");
      LoginModel.getInstance().setScore(10);
      this.forceUpdate();
    }

    render() {
        return <span className="Test" onClick={this.clickHandler.bind(this)}>
          {LoginModel.getInstance().getScore()}
        </span>
    }
}
