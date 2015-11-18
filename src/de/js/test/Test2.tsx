import * as React from 'react';

export default class Test2 extends React.Component<{},{}> {
    props: {
        mega?:string;
        mega2?:string;
    }

    render() {
        return <span>{this.props.mega} - {this.props.mega2}</span>
    }
}
