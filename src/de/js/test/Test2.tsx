import React = require('react');

class Test2 extends React.Component<{},{}> {
    props: {
        mega?:string;
        mega2?:string;
    }

    render() {
        return <span>{this.props.mega} - {this.props.mega2}</span>
    }
}

export = Test2
